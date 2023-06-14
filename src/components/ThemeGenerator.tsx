import React from "react";
import { useState } from "react";
import { Box, Button, Select, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const ThemeGenerator = () => {
  const [genre, setGenre] = useState({ large: '', middle: '', small: '' });
  const [outputNovelTheme, setOutputNovelTheme] = useState('');
  const selectBoxBgColor = useColorModeValue("gray.300", "gray.600");
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800","white");

  const fetchRandomNovelTheme = async () => {
    const response = await fetch(`/api/novel-theme?large=${genre.large}&middle=${genre.middle}&small=${genre.small}`);
    const data = await response.json();
    setOutputNovelTheme(data.theme);
  };

  return (
    <Box bg={bgColor} p={4} borderRadius="md">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" color={textColor}>テーマジェネレーター</Text>
        <Box>
          <Text color={textColor}>ジャンルを選択してください</Text>
          <VStack spacing={2}>
            <Select
              placeholder="大ジャンルを選択"
              onChange={(e) =>
                setGenre({ ...genre, large: e.target.value })
              }
              bg={selectBoxBgColor}
            >
              {/* 大ジャンルの選択肢 */}
            </Select>
            <Select
              placeholder="中ジャンルを選択"
              onChange={(e) =>
                setGenre({ ...genre, middle: e.target.value })
              }
              bg={selectBoxBgColor}
            >
              {/* 中ジャンルの選択肢 */}
            </Select>
            <Select
              placeholder="小ジャンルを選択"
              onChange={(e) =>
                setGenre({ ...genre, small: e.target.value })
              }
              bg={selectBoxBgColor}
            >
              {/* 小ジャンルの選択肢 */}
            </Select>
          </VStack>
        </Box>
        <Button
          onClick={fetchRandomNovelTheme}
          colorScheme="teal"
        >
          ランダムな小説のテーマを生成
        </Button>
        <Text color={textColor}>生成された小説のテーマ: {outputNovelTheme}</Text>
      </VStack>
    </Box>
  );
};

export default ThemeGenerator;
