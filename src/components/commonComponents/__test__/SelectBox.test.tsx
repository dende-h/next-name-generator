import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SelectBox } from "../SelectBox";

describe("SelectBox", () => {
	it("適切なプレースホルダーをレンダリングする", () => {
		const { getByRole } = render(
			<SelectBox placeholder="選択してください" onChange={() => {}} children={<option value="option">Option</option>} />
		);

		// Selectコンポーネントのプレースホルダーをチェックする
		const selectElement = getByRole("combobox");
		expect(selectElement.children[0]).toHaveTextContent("選択してください");
	});

	it("オプションが選択された時にonChangeハンドラを呼び出す", () => {
		const mockOnChange = jest.fn();
		const { getByRole } = render(
			<SelectBox placeholder="選択してください" onChange={mockOnChange}>
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
			</SelectBox>
		);

		// Select要素を選択
		const selectElement = getByRole("combobox") as HTMLSelectElement; // 型アサーションを使用して正しい型を指定

		// Select要素でchangeイベントをシミュレート
		fireEvent.change(selectElement, { target: { value: "option1" } });

		expect(mockOnChange).toHaveBeenCalled();
	});

	// 新たに追加するテストケース
	it("全てのオプションが適切にレンダリングされている", () => {
		const { getAllByRole } = render(
			<SelectBox placeholder="選択してください" onChange={() => {}}>
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
			</SelectBox>
		);

		// すべてのoption要素を取得
		const options = getAllByRole("option");

		// 各option要素が期待通りのテキストと値を持っていることを検証
		expect((options[1] as HTMLOptionElement).text).toBe("Option 1");
		expect((options[1] as HTMLOptionElement).value).toBe("option1");
		expect((options[2] as HTMLOptionElement).text).toBe("Option 2");
		expect((options[2] as HTMLOptionElement).value).toBe("option2");
	});

	it("onChangeハンドラに適切な値が渡される", () => {
		const mockOnChange = jest.fn();
		const { getByRole } = render(
			<SelectBox placeholder="選択してください" onChange={mockOnChange}>
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
			</SelectBox>
		);
		// Select要素を選択
		const selectElement = getByRole("combobox");
		// Select要素でchangeイベントをシミュレート
		fireEvent.change(selectElement, { target: { value: "option1" } });

		// onChangeハンドラに渡された引数が期待通りであることを確認
		expect(mockOnChange).toHaveBeenCalledWith(
			expect.objectContaining({ target: expect.objectContaining({ value: "option1" }) })
		);
	});

	it("正しくレンダリングされる", () => {
		const { getByRole } = render(
			<SelectBox placeholder="選択してください" onChange={() => {}}>
				<option value="option1">Option 1</option>
			</SelectBox>
		);

		// Select要素が存在することを確認
		const selectElement = getByRole("combobox");
		expect(selectElement).toBeInTheDocument();

		// Select要素のプレースホルダー（最初のoption要素）を検証
		expect((selectElement.firstChild as HTMLOptionElement).text).toBe("選択してください");
	});
});
