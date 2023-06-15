import React from "react";
import { render } from "@testing-library/react";
import { NameOutput } from "../NameOutput";

describe("NameOutput", () => {
	it("正しい名前をレンダリングする", () => {
		const { getByText } = render(<NameOutput name="テスト名" />);

		expect(getByText("生成名:テスト名")).toBeInTheDocument();
	});
});
