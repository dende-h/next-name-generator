import React from "react";
import { useState } from "react";
import { Box, Button, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { ThemeOutput } from "./ThemeOutput";

const ThemeGenerator = () => {
	const [outputNovelThemes, setOutputNovelThemes] = useState(["", "", ""]);
	const bgColor = useColorModeValue("gray.200", "gray.700");

	const fetchRandomNovelThemes = async () => {
		const response = await fetch(`/api/novel-theme`);
		const data = await response.json();
		setOutputNovelThemes(data.themes);
	};

	return (
		<Box bg={bgColor} p={4} borderRadius="md">
			<VStack spacing={4} align="stretch">
				<Text fontSize="2xl" fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
					テーマジェネレーター
				</Text>
				<Button onClick={fetchRandomNovelThemes} colorScheme="teal">
					ランダムな小説のテーマを生成
				</Button>
				<ThemeOutput theme={outputNovelThemes[0]} />
				<ThemeOutput theme={outputNovelThemes[1]} />
				<ThemeOutput theme={outputNovelThemes[2]} />
			</VStack>
		</Box>
	);
};

export default ThemeGenerator;
