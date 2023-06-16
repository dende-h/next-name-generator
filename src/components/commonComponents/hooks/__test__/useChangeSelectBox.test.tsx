import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { useChangeSelectBox } from "../useChangeSelectBox";
import { Box, Select, Text } from "@chakra-ui/react";

const Wrapper = () => {
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

describe("useChangeSelectBoxのテスト", () => {
	test("初期状態ではselectValueがundefinedであること", () => {
		const { getByText } = render(<Wrapper />);
		expect(getByText("undefined")).toBeInTheDocument();
	});

	test("selectの選択に応じてselectValueが更新されること", async () => {
		const { getByText, getByRole } = render(<Wrapper />);
		const selectElement = getByRole("combobox");

		fireEvent.change(selectElement, { target: { value: "test1" } });

		await waitFor(() => {
			expect(getByText("test1")).toBeInTheDocument();
		});
	});
});
