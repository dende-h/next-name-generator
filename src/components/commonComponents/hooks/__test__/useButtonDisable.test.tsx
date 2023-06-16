import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useButtonDisable } from "../useButtonDisable";
import { act } from "react-dom/test-utils";

// モックのButtonコンポーネント（isDisabledをテストするため）
const Button = ({ isDisabled, children }: { isDisabled: boolean; children: string }) => (
	<button disabled={isDisabled}>{children}</button>
);

// テストのためのWrapperコンポーネント
const Wrapper = ({ value }: { value: string | undefined }) => {
	const isDisabled = useButtonDisable(value);
	return <Button isDisabled={isDisabled}>Test</Button>;
};

describe("useButtonDisable custom hook", () => {
	// テストケース1: valueがstring値のとき、ボタンは有効化されていること
	it("should enable the button when value is a string", () => {
		const { getByText } = render(<Wrapper value="test" />);
		expect(getByText("Test")).not.toBeDisabled();
	});

	// テストケース2: valueがundefinedのとき、ボタンは無効化されていること
	it("should disable the button when value is undefined", () => {
		const { getByText } = render(<Wrapper value={undefined} />);
		expect(getByText("Test")).toBeDisabled();
	});

	// テストケース3: valueの値がundefinedとstring値で変わったとき、ボタンの有効化が切り替わること
	it("should switch the button enabled/disabled when value changes between undefined and a string value", () => {
		const { getByText, rerender } = render(<Wrapper value={undefined} />);
		// 初めは無効化
		expect(getByText("Test")).toBeDisabled();

		// 値を変更して、再レンダリング
		rerender(<Wrapper value="test" />);
		// 現在、有効化
		expect(getByText("Test")).not.toBeDisabled();
	});
});
