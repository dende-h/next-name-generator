import { AllNamesData, ResponseNamesData } from "../../components/NameGenerator/Types/nameGeneratorTypes";
import { NAMES } from "../../components/NameGenerator/content/nameGenerarotResponseData";
import { NextApiRequest, NextApiResponse } from "next";

const Names = NAMES;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { language, theme } = req.query;

	if (
		typeof language !== "string" ||
		typeof theme !== "string" ||
		!Names[language as keyof AllNamesData] ||
		!Names[language as keyof AllNamesData][theme as keyof ResponseNamesData]
	) {
		res.status(400).send("Invalid language or theme");
		return;
	}

	const names = NAMES[language as keyof AllNamesData][theme as keyof ResponseNamesData];
	const randomName = names[Math.floor(Math.random() * names.length)];

	res.status(200).json({ name: randomName });
}
