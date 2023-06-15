export type NameOutputProps = {
	name: string;
};

export type NameGeneratorApiParameter = string | undefined;

//引数で受け取るパラメータの型
export type NameFetchApiParameters = {
	language: string | undefined;
	nameTheme: string | undefined;
};

// 取得したレスポンスの型
export type ApiResponseRandomName = {
	name: string;
};

//データを取得する関数の型
export type FetchRandomNameFunction = ({ language, nameTheme }: NameFetchApiParameters) => Promise<void>;

export type ResponseNamesData = {
	flowers: string[];
	minerals: string[];
	stars: string[];
};

export type AllNamesData = {
	english: ResponseNamesData;
	japanese: ResponseNamesData;
	french: ResponseNamesData;
	chinese: ResponseNamesData;
	italian: ResponseNamesData;
};
