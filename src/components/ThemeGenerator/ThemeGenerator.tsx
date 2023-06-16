import React from "react";
import { Box, Button, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { ThemeOutput } from "./ThemeOutput";
import { SelectBox } from "../commonComponents/SelectBox";
import { SelectOption } from "../commonComponents/SelectOption";
import { themeGeneratorLanguageSelectOptionContentArray } from "./content/themeGeneratorSelectOptionContent";
import { useChangeSelectBox } from "../commonComponents/hooks/useChangeSelectBox";
import { useFetchRandomTheme } from "./hooks/useFetchRandomTheme";
import { useButtonDisable } from "../commonComponents/hooks/useButtonDisable";

const ThemeGenerator = () => {
	//セレクトボックスに設定する選択肢の取得
	const selectGenre = themeGeneratorLanguageSelectOptionContentArray;

	//セレクトボックスの値を変更するフック
	const genre = useChangeSelectBox();

	//APIデータ取得のフック
	const { outputTheme, fetchRandomTheme, isLoading } = useFetchRandomTheme();

	//ボタンのDisable制御
	const isDisable = useButtonDisable(genre.selectValue);

	//ダーク対応のバックグラウンドカラー
	const bgColor = useColorModeValue("gray.200", "gray.700");

	return (
		<Box bg={bgColor} p={4} borderRadius="md">
			<VStack spacing={4} align="stretch">
				<Text fontSize="2xl" fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
					テーマジェネレーター
				</Text>
				<SelectBox
					placeholder={"ジャンルを選択"}
					onChange={(e) => genre.onChangeSelectValue(e)}
					label="《小説ジャンル》"
				>
					<SelectOption selectOptions={selectGenre} />
				</SelectBox>
				<Button
					onClick={() => {
						fetchRandomTheme({ genre: genre.selectValue });
					}}
					colorScheme={isDisable ? "red" : "teal"}
					isDisabled={isDisable}
					isLoading={isLoading}
				>
					{isDisable ? "ジャンルを選択" : "小説のテーマを生成"}
				</Button>
				<ThemeOutput theme={outputTheme} />
			</VStack>
		</Box>
	);
};

export default ThemeGenerator;
