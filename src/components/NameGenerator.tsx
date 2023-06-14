import React from "react";
import { useState } from "react";
import { Box, Button, Select, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const NameGenerator = () => {
  const [language, setLanguage] = useState('');
  const [theme, setTheme] = useState('');
  const [outputName, setOutputName] = useState('');
  const selectBoxBgColor = useColorModeValue("gray.300", "gray.600");
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800","white");

  const fetchRandomName = async () => {
    const response = await fetch(`/api/name?language=${language}&theme=${theme}`);
    const data = await response.json();
    setOutputName(data.name);
  };

  return (
    <Box bg={bgColor} p={4} borderRadius="md">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" color={textColor}>名前ジェネレーター</Text>
        <Box>
          <Text color={textColor}>言語を選択してください</Text>
          <Select
            bg={selectBoxBgColor}
            placeholder="言語を選択"
            onChange={(e) => setLanguage(e.target.value)}
          >
            {/* 言語の選択肢 */}
          </Select>
        </Box>
        <Box>
          <Text color={textColor}>名前のテーマを選択してください</Text>
          <Select
            placeholder="名前のテーマを選択"
            onChange={(e) => setTheme(e.target.value)}
            bg={selectBoxBgColor}
          >
            {/* 名前のテーマの選択肢 */}
          </Select>
        </Box>
        <Button
          onClick={fetchRandomName}
          colorScheme="teal"
        >
          ランダムな名前を生成
        </Button>
        <Text color={textColor}>生成された名前: {outputName}</Text>
      </VStack>
    </Box>
  );
};

export default NameGenerator;
