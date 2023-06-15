// useCheckValueUndefined.test.js
import React from "react";
import { render, waitFor } from "@testing-library/react";
import { TestComponent } from "./TestComponent";

describe("useCheckValueUndefinedのテスト", () => {
	test("引数が一つの文字列の場合、falseを返すこと", async () => {
		const { getByText } = render(<TestComponent value1="テスト" />);

		await waitFor(() => {
			expect(getByText("false")).toBeInTheDocument();
		});
	});

	test("引数が一つでundefinedの場合、trueを返すこと", async () => {
		const { getByText } = render(<TestComponent value1={undefined} />);

		await waitFor(() => {
			expect(getByText("true")).toBeInTheDocument();
		});
	});

	test("引数が二つで、少なくとも一つがundefinedの場合、trueを返すこと", async () => {
		const { getByText } = render(<TestComponent value1={undefined} value2="テスト" />);

		await waitFor(() => {
			expect(getByText("true")).toBeInTheDocument();
		});
	});

	test("引数が二つともundefinedの場合、trueを返すこと", async () => {
		const { getByText } = render(<TestComponent value1={undefined} value2={undefined} />);

		await waitFor(() => {
			expect(getByText("true")).toBeInTheDocument();
		});
	});

	test("引数が二つで、どちらも文字列の場合、falseを返すこと", async () => {
		const { getByText } = render(<TestComponent value1="テスト1" value2="テスト2" />);

		await waitFor(() => {
			expect(getByText("false")).toBeInTheDocument();
		});
	});
});
