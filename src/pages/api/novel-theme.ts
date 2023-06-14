import { NextApiRequest, NextApiResponse } from "next";

// 3つのテーマ配列
const THEMES = {
	themeGroup1: ["theme1.1", "theme1.2", "theme1.3"],
	themeGroup2: ["theme2.1", "theme2.2", "theme2.3"],
	themeGroup3: ["theme3.1", "theme3.2", "theme3.3"]
};

function getRandomThemeFromGroup(group: string[]) {
	const randomIndex = Math.floor(Math.random() * group.length);
	return group[randomIndex];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	// 各テーマ配列からランダムにテーマを選びます
	const randomThemes = [
		getRandomThemeFromGroup(THEMES.themeGroup1),
		getRandomThemeFromGroup(THEMES.themeGroup2),
		getRandomThemeFromGroup(THEMES.themeGroup3)
	];

	res.status(200).json({ themes: randomThemes });
}
