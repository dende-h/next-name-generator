import { useState } from "react";
import { ApiResponseRandomTheme, FetchRandomThemeFunction } from "../types/themeGeneratorTypes";

export const useFetchRandomTheme = () => {
	//出力する値のState
	const [outputTheme, setOutputTheme] = useState<string[]>([]);
	//ローディングのState
	const [isLoading, setIsLoading] = useState<boolean>(false);

	//APIエンドポイントから文字列の値を一つ取得する
	const fetchRandomTheme: FetchRandomThemeFunction = async ({ genre }) => {
		if (!genre) {
			return;
		}
		setIsLoading(true);
		//エンドポイントのURL
		const url = `/api/novel-theme?genre=${genre}`;

		//データフェッチ
		try {
			const response = await fetch(url);
			const data: ApiResponseRandomTheme = await response.json();
			setOutputTheme(data.themes);
		} catch (error) {
			alert("APIリクエストが失敗しました。");
		}
		setIsLoading(false);
	};

	return { fetchRandomTheme, outputTheme, isLoading };
};
