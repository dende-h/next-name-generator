import { useState } from "react";
import { ApiResponseRandomName, FetchRandomNameFunction } from "../Types/nameGeneratorTypes";

export const useFetchRandomName = () => {
	//出力する値のState
	const [outputName, setOutputName] = useState<string>("");
	//ローディングのState
	const [isLoading, setIsLoading] = useState<boolean>(false);

	//APIエンドポイントから文字列の値を一つ取得する
	const fetchRandomName: FetchRandomNameFunction = async ({ language, nameTheme }) => {
		if (!language || !nameTheme) {
			return;
		}

		setIsLoading(true);
		//エンドポイントのURL
		const url = `/api/name?language=${language}&theme=${nameTheme}`;

		//データフェッチ
		try {
			const response = await fetch(url);
			const data: ApiResponseRandomName = await response.json();
			setOutputName(data.name);
		} catch (error) {
			alert("APIリクエストが失敗しました。");
		}
		setIsLoading(false);
	};

	return { fetchRandomName, outputName, isLoading };
};
