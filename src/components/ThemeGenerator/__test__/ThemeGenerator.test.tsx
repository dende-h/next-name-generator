import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom/extend-expect";
import ThemeGenerator from "../ThemeGenerator";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("ThemeGenerator コンポーネントの統合テスト", () => {
	beforeEach(() => {
		fetchMock.resetMocks();
	});

	it("ボタンをクリックするとテーマがランダムに生成される", async () => {
		const mockThemes = ["theme1", "theme2", "theme3"];
		fetchMock.mockResponseOnce(JSON.stringify({ themes: mockThemes }));

		render(
			<ChakraProvider>
				<ThemeGenerator />
			</ChakraProvider>
		);

		fireEvent.click(screen.getByText("ランダムな小説のテーマを生成"));

		await waitFor(() => {
			expect(screen.getByText(`生成された小説のテーマ: ${mockThemes[0]}`)).toBeInTheDocument();
			expect(screen.getByText(`生成された小説のテーマ: ${mockThemes[1]}`)).toBeInTheDocument();
			expect(screen.getByText(`生成された小説のテーマ: ${mockThemes[2]}`)).toBeInTheDocument();
		});
	});
});
