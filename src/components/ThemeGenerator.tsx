// ThemeGenerator.js
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
        {/* ... */}
      </VStack>
    </Box>
  );
};

export default ThemeGenerator;
