// NameGenerator.js
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
        {/* ... */}
      </VStack>
    </Box>
  );
};

export default NameGenerator;
