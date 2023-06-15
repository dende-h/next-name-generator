import React, { useEffect } from "react";
import { Box, Button, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { SelectBox } from "../commonComponents/SelectBox";
import { NameOutput } from "./NameOutput";
import { SelectOption } from "../commonComponents/SelectOption";
import {
	nameGeneratorLanguageSelectOptionContentArray,
	nameGeneratorThemeSelectOptionContentArray
} from "./content/nameGeneratorSelectOptionContent";
import { useChangeSelectBox } from "../commonComponents/hooks/useChangeSelectBox";
import { useFetchRandomName } from "./hooks/useFetchRandomName";
import { useCheckValueUndefined } from "../commonComponents/hooks/useCheckValueUndefined";

const NameGenerator = () => {
	//セレクトボックスに設定する選択肢の取得
	const selectLanguage = nameGeneratorLanguageSelectOptionContentArray;
	const selectNameTheme = nameGeneratorThemeSelectOptionContentArray;

	//セレクトボックスの値を変更するフック
	const language = useChangeSelectBox();
	const nameTheme = useChangeSelectBox();

	//ボタンのDisable制御
	const { isUndefined, onCheckValue } = useCheckValueUndefined();
	useEffect(() => {
		onCheckValue({ value1: language.selectValue, value2: nameTheme.selectValue });
	}, [language.selectValue, nameTheme.selectValue]);

	//ダーク対応のバックグラウンドカラー
	const bgColor = useColorModeValue("gray.200", "gray.700");

	//APIデータ取得のフック
	const { outputName, fetchRandomName, isLoading } = useFetchRandomName();

	return (
		<Box bg={bgColor} p={4} borderRadius="md">
			<VStack spacing={4} align="stretch">
				<Text as={"h2"} fontSize="2xl" fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
					名前ジェネレーター
				</Text>
				<SelectBox placeholder="言語を選択" onChange={(e) => language.onChangeSelectValue(e)} label="≪名前の言語≫">
					<SelectOption selectOptions={selectLanguage} />
				</SelectBox>
				<SelectBox
					placeholder="カテゴリを選択"
					onChange={(e) => nameTheme.onChangeSelectValue(e)}
					label="≪名前のカテゴリ≫"
				>
					<SelectOption selectOptions={selectNameTheme} />
				</SelectBox>
				<Button
					onClick={() => fetchRandomName({ language: language.selectValue, nameTheme: nameTheme.selectValue })}
					colorScheme={isUndefined ? "red" : "teal"}
					isDisabled={isUndefined}
					isLoading={isLoading}
				>
					{isUndefined ? "言語とカテゴリを選択" : "名前を生成"}
				</Button>
				<NameOutput name={outputName} />
			</VStack>
		</Box>
	);
};

export default NameGenerator;
