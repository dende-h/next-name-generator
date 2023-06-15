// TestComponent.js
import React, { useEffect } from "react";
import { useCheckValueUndefined } from "../useCheckValueUndefined";
import { Box, Select, Text } from "@chakra-ui/react";
import { useChangeSelectBox } from "../useChangeSelectBox";

type TestProps = {
	value1: string | undefined;
	value2?: string | undefined;
};

export const TestComponent = ({ value1, value2 }: TestProps) => {
	const { isUndefined, onCheckValue } = useCheckValueUndefined();

	useEffect(() => {
		onCheckValue({ value1, value2 });
	}, [value1, value2]);

	return <div>{isUndefined ? "true" : "false"}</div>;
};

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
