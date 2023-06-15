import { AllThemesData, CommonTheme, StoryTheme } from "../types/themeGeneratorTypes";

export const THEMES: AllThemesData = {
	sf: {
		theme1: ["AIの反乱", "宇宙探索", "タイムトラベル"]
	},
	fantasy: {
		theme1: ["魔法学校", "壮大な冒険", "神話の生物"]
	},
	history: {
		theme1: ["古代文明", "中世の時代", "第二次世界大戦"]
	},
	mystery: {
		theme1: ["お化け屋敷", "行方不明の人", "神秘的な遺物"]
	},
	horror: {
		theme1: ["気味の悪い町", "幽霊屋敷", "森のモンスター"]
	},
	romance: {
		theme1: ["禁じられた恋", "二度目のチャンス", "三角関係"]
	}
};

export const storyTheme: StoryTheme = {
	theme2: ["コメディ", "ドラマ", "冒険", "スリラー", "アクション"]
};

export const commonTheme: CommonTheme = {
	theme3: ["秘密", "復讐", "発見", "生存", "犠牲"]
};
