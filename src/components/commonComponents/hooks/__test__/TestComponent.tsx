import React from "react";
import { Box, Button, Select, Text } from "@chakra-ui/react";
import { useChangeSelectBox } from "../useChangeSelectBox";
import { useButtonDisable } from "../useButtonDisable";

type TestValue = string | undefined;

export const TestSelectBox = () => {
	const { selectValue, onChangeSelectValue } = useChangeSelectBox();

	return (
		<Box>
			<Select placeholder={"選択してください"} onChange={onChangeSelectValue}>
				<option value={"test1"}>テスト1</option>
				<option value={"test2"}>テスト2</option>
				<option value={"test3"}>テスト3</option>
			</Select>
			<Text>{selectValue ? selectValue : "undefined"}</Text>
		</Box>
	);
};

export const TestButton = (value: TestValue) => {
	const isDisable = useButtonDisable(value);

	return <Button isDisabled={isDisable}>Test</Button>;
};
