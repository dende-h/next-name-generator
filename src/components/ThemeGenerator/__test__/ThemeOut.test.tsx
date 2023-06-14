import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeOutput } from "../ThemeOutput";
import { ChakraProvider } from "@chakra-ui/react";

describe("ThemeOutput コンポーネント", () => {
	it("テーマが正しくレンダリングされる", () => {
		const theme = "テストテーマ";
		render(
			<ChakraProvider>
				<ThemeOutput theme={theme} />
			</ChakraProvider>
		);
		expect(screen.getByText(`生成された小説のテーマ: ${theme}`)).toBeInTheDocument();
	});

	it("正しいテーマが渡された場合、そのテーマが表示される", () => {
		const theme = "更新されたテーマ";
		render(
			<ChakraProvider>
				<ThemeOutput theme={theme} />
			</ChakraProvider>
		);
		expect(screen.getByText(`生成された小説のテーマ: ${theme}`)).toBeInTheDocument();
	});
});
