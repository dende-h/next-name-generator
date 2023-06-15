import { useState } from "react";
import { ApiResponseRandomTheme, FetchRandomThemeFunction } from "../types/themeGeneratorTypes";

export const useFetchRandomTheme = () => {
	//出力する値のState
	const [outputTheme, setOutputTheme] = useState<string[]>([]);

	//APIエンドポイントから文字列の値を一つ取得する
	const fetchRandomTheme: FetchRandomThemeFunction = async ({ genre }) => {
		if (!genre) {
			return;
		}
		//エンドポイントのURL
		const url = `/api/name?genre=${genre}`;

		//データフェッチ
		try {
			const response = await fetch(url);
			const data: ApiResponseRandomTheme = await response.json();
			setOutputTheme(data.theme);
		} catch (error) {
			alert("APIリクエストが失敗しました。");
		}
	};

	return { fetchRandomTheme, outputTheme };
};
