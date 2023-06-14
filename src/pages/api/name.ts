import { NextApiRequest, NextApiResponse } from 'next';

const NAMES = {
  english: {
    flowers: ['Rose', 'Lily', 'Daisy', 'Ivy', 'Violet'],
    minerals: ['Diamond', 'Emerald', 'Ruby', 'Amethyst', 'Opal']
  },
  japanese: {
    flowers: ['Sakura', 'Ume', 'Tsubaki', 'Suisen', 'Kiku'],
    minerals: ['Magano', 'Emerarudo', 'Rubii', 'Ametisuto', 'Opāru']
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const language = Array.isArray(req.query.language) ? req.query.language[0] : req.query.language;
  const theme = Array.isArray(req.query.theme) ? req.query.theme[0] : req.query.theme;
  
  if (!language || !theme || !NAMES[language as keyof typeof NAMES] || !NAMES[language as keyof typeof NAMES][theme as keyof typeof NAMES['english']]) {
    res.status(400).send('Invalid language or theme');
    return;
  }

  const names = NAMES[language as keyof typeof NAMES][theme as keyof typeof NAMES['english']];
  const randomName = names[Math.floor(Math.random() * names.length)];

  res.status(200).json({ name: randomName });
}
