import React, { useEffect } from "react";
import { Box, Button, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { ThemeOutput } from "./ThemeOutput";
import { useCheckValueUndefined } from "../commonComponents/hooks/useCheckValueUndefined";
import { SelectBox } from "../commonComponents/SelectBox";
import { SelectOption } from "../commonComponents/SelectOption";
import { themeGeneratorLanguageSelectOptionContentArray } from "./content/themeGeneratorSelectOptionContent";
import { useChangeSelectBox } from "../commonComponents/hooks/useChangeSelectBox";
import { useFetchRandomTheme } from "./hooks/useFetchRandomTheme";

const ThemeGenerator = () => {
	//セレクトボックスに設定する選択肢の取得
	const selectGenre = themeGeneratorLanguageSelectOptionContentArray;

	//セレクトボックスの値を変更するフック
	const genre = useChangeSelectBox();

	//APIデータ取得のフック
	const { outputTheme, fetchRandomTheme, isLoading } = useFetchRandomTheme();

	//ボタンのDisable制御
	const { isUndefined, onCheckValue } = useCheckValueUndefined();
	useEffect(() => {
		onCheckValue({ value1: genre.selectValue });
	}, [genre.selectValue]);

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
					colorScheme={isUndefined ? "red" : "teal"}
					isDisabled={isUndefined}
					isLoading={isLoading}
				>
					{isUndefined ? "ジャンルを選択" : "小説のテーマを生成"}
				</Button>
				<ThemeOutput theme={outputTheme} />
			</VStack>
		</Box>
	);
};

export default ThemeGenerator;
