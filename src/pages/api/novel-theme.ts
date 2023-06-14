import { NextApiRequest, NextApiResponse } from 'next';

type Theme = {
    [key: string]: {
      [key: string]: {
        [key: string]: string[];
      };
    };
  };
  
  const THEMES: Theme = {
    fantasy: {
      high: {
        elves: ['theme1', 'theme2'],
        dragons: ['theme1', 'theme2'],
      },
      low: {
        thieves: ['theme1', 'theme2'],
        knights: ['theme1', 'theme2'],
      },
    },
    scifi: {
      space: {
        exploration: ['theme1', 'theme2'],
        warfare: ['theme1', 'theme2'],
      },
      dystopia: {
        postapocalyptic: ['theme1', 'theme2'],
        cyberpunk: ['theme1', 'theme2'],
      },
    },
  }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const large = Array.isArray(req.query.large) ? req.query.large[0] : req.query.large;
    const middle = Array.isArray(req.query.middle) ? req.query.middle[0] : req.query.middle;
    const small = Array.isArray(req.query.small) ? req.query.small[0] : req.query.small;
  
    if (!large || !middle || !small) {
      res.status(400).send('Invalid genre');
      return;
    }
  
    // Type Guard to ensure correct types
    if (large in THEMES && middle in THEMES[large] && small in THEMES[large][middle]) {
      const themes = THEMES[large][middle][small];
  
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
  
      res.status(200).json({ theme: randomTheme });
    } else {
      res.status(400).send('Invalid genre');
      return;
    }
  }
