import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeOutput } from "../ThemeOutput";
import { ChakraProvider } from "@chakra-ui/react";

describe("ThemeOutput コンポーネント", () => {
	it("テーマが正しくレンダリングされる", () => {
		const theme = ["テストテーマ1", "テストテーマ2", "テストテーマ3"];
		render(
			<ChakraProvider>
				<ThemeOutput theme={theme} />
			</ChakraProvider>
		);
		expect(
			screen.getByText(`生成テーマ:ジャンル:${theme[0]},ストーリー:${theme[1]},汎用:${theme[2]}`)
		).toBeInTheDocument();
	});
});
