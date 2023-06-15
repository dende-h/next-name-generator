export type ThemeOutputProps = {
	theme: string[];
};

export type ThemeGeneratorApiParameter = string | undefined;

//引数で受け取るパラメータの型
export type ThemeFetchApiParameters = {
	genre: string | undefined;
};

// 取得したレスポンスの型
export type ApiResponseRandomTheme = {
	themes: string[];
};

//データを取得する関数の型
export type FetchRandomThemeFunction = ({ genre }: ThemeFetchApiParameters) => Promise<void>;

export type ResponseThemesData = {
	theme1: string[];
};

export type StoryTheme = { theme2: string[] };

export type CommonTheme = {
	theme3: string[];
};

export type AllThemesData = {
	sf: ResponseThemesData;
	fantasy: ResponseThemesData;
	history: ResponseThemesData;
	mystery: ResponseThemesData;
	horror: ResponseThemesData;
	romance: ResponseThemesData;
};
