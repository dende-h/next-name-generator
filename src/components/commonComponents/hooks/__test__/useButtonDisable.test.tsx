import React from "react";
import { render } from "@testing-library/react";
import { useButtonDisable } from "../useButtonDisable";

// モックのButtonコンポーネント（isDisabledをテストするため）
const Button = ({ isDisabled, children }: { isDisabled: boolean; children: string }) => (
	<button disabled={isDisabled}>{children}</button>
);

// テストのためのWrapperコンポーネント
const Wrapper = ({ value }: { value: string | undefined }) => {
	const isDisabled = useButtonDisable(value);
	return <Button isDisabled={isDisabled}>Test</Button>;
};

describe("useButtonDisableカスタムフックの動作", () => {
	it("valueがstring値のとき、ボタンは有効化されていること", () => {
		const { getByText } = render(<Wrapper value="test" />);
		expect(getByText("Test")).not.toBeDisabled();
	});

	it("valueがundefinedのとき、ボタンは無効化されていること", () => {
		const { getByText } = render(<Wrapper value={undefined} />);
		expect(getByText("Test")).toBeDisabled();
	});

	it("valueの値がundefinedとstring値で変わったとき、ボタンの有効化が切り替わること", () => {
		const { getByText, rerender } = render(<Wrapper value={undefined} />);
		// 初めは無効化
		expect(getByText("Test")).toBeDisabled();

		// 値を変更して、再レンダリング
		rerender(<Wrapper value="test" />);
		// 現在、有効化
		expect(getByText("Test")).not.toBeDisabled();
	});
});
