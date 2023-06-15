import { THEMES, commonTheme, storyTheme } from "../../components/ThemeGenerator/content/themeGenerarotResponseData";
import { AllThemesData } from "../../components/ThemeGenerator/types/themeGeneratorTypes";
import { NextApiRequest, NextApiResponse } from "next";

// 3つのテーマ配列
const thema1 = THEMES;
const theme2 = storyTheme;

const theme3 = commonTheme;

function getRandomThemeFromGroup(group: string[]) {
	const randomIndex = Math.floor(Math.random() * group.length);
	return group[randomIndex];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { genre } = req.query;
	if (typeof genre !== "string" || !thema1[genre as keyof AllThemesData]) {
		res.status(400).send("Invalid language or theme");
		return;
	}

	// 各テーマ配列からランダムにテーマを選びます
	const randomThemes = [
		getRandomThemeFromGroup(thema1[genre as keyof AllThemesData].theme1),
		getRandomThemeFromGroup(theme2.theme2),
		getRandomThemeFromGroup(theme3.theme3)
	];

	res.status(200).json({ themes: randomThemes });
}
