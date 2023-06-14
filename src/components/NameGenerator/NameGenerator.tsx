import React from "react";
import { useState } from "react";
import { Box, Button, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { SelectBox } from "./SelectBox";
import { NameOutput } from "./NameOutput";

const NameGenerator = () => {
	const [language, setLanguage] = useState("");
	const [theme, setTheme] = useState("");
	const [outputName, setOutputName] = useState("");
	const selectBoxBgColor = useColorModeValue("gray.300", "gray.600");
	const bgColor = useColorModeValue("gray.200", "gray.700");

	const fetchRandomName = async () => {
		const response = await fetch(`/api/name?language=${language}&theme=${theme}`);
		const data = await response.json();
		setOutputName(data.name);
	};

	return (
		<Box bg={bgColor} p={4} borderRadius="md">
			<VStack spacing={4} align="stretch">
				<Text fontSize="2xl" fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
					名前ジェネレーター
				</Text>
				<SelectBox placeholder="言語を選択" onChange={(e) => setLanguage(e.target.value)} bgColor={selectBoxBgColor}>
					{/* 言語の選択肢 */}
				</SelectBox>
				<SelectBox
					placeholder="名前のテーマを選択"
					onChange={(e) => setTheme(e.target.value)}
					bgColor={selectBoxBgColor}
				>
					{/* 名前のテーマの選択肢 */}
				</SelectBox>
				<Button onClick={fetchRandomName} colorScheme="teal">
					ランダムな名前を生成
				</Button>
				<NameOutput name={outputName} />
			</VStack>
		</Box>
	);
};

export default NameGenerator;
