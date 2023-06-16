import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { TestSelectBox } from "./TestComponent";

describe("useChangeSelectBoxのテスト", () => {
	test("初期状態ではselectValueがundefinedであること", () => {
		const { getByText } = render(<TestSelectBox />);
		expect(getByText("undefined")).toBeInTheDocument();
	});

	test("selectの選択に応じてselectValueが更新されること", async () => {
		const { getByText, getByRole } = render(<TestSelectBox />);
		const selectElement = getByRole("combobox");

		fireEvent.change(selectElement, { target: { value: "test1" } });

		await waitFor(() => {
			expect(getByText("test1")).toBeInTheDocument();
		});
	});
});
