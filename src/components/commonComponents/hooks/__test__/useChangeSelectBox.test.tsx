import React from "react";
import { render, fireEvent, waitFor, renderHook, act } from "@testing-library/react";
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
	it("初期状態ではselectValueがundefinedであること", () => {
		const { getByText } = render(<Wrapper />);
		expect(getByText("undefined")).toBeInTheDocument();
	});

	it("selectの選択に応じてselectValueが更新されること", async () => {
		const { getByText, getByRole } = render(<Wrapper />);
		const selectElement = getByRole("combobox");

		fireEvent.change(selectElement, { target: { value: "test1" } });

		await waitFor(() => {
			expect(getByText("test1")).toBeInTheDocument();
		});
	});

	it("onChange関数が受け取った値をvalueとして返すこと", () => {
		const test = { target: { value: "test" } } as React.ChangeEvent<HTMLSelectElement>;
		const { result } = renderHook(() => useChangeSelectBox());

		act(() => result.current.onChangeSelectValue(test));

		expect(result.current.selectValue).toBe("test");
	});
});
