import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import { Box, Button, Container, Flex, Select, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const IndexPage = () => {
  const [language, setLanguage] = useState('');
  const [theme, setTheme] = useState('');
  const [genre, setGenre] = useState({ large: '', middle: '', small: '' });
  const [outputName, setOutputName] = useState('');
  const [outputNovelTheme, setOutputNovelTheme] = useState('');
  const [nameTheme, setNameTheme] = useState('');
  const selectBoxBgColor = useColorModeValue("gray.300", "gray.600")
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800","white");
  const fetchRandomName = async () => {
    // APIを呼び出してランダムな名前を取得し、setOutputNameで更新する
  };

  const fetchRandomNovelTheme = async () => {
    // APIを呼び出してランダムな小説のテーマを取得し、setOutputNovelThemeで更新する
  };

  return (
    <Container maxW="container.xl" position="relative">
    
        {/* DarkModeSwitch */}
        <DarkModeSwitch />
    <VStack
      spacing={8}
      align="stretch"
      bg="gray.600"
      p={4}
      borderRadius="md"
      boxShadow="xl"
    >
      {/* 名前ジェネレーター */}
      <Box bg={bgColor} p={4} borderRadius="md">
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold" color={textColor}>
            名前ジェネレーター
          </Text>
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
              onChange={(e) => setNameTheme(e.target.value)}
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

      {/* テーマジェネレーター */}
      <Box bg={bgColor} p={4} borderRadius="md">
        
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold" color={textColor}>
            テーマジェネレーター
          </Text>
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
              >{/* 中ジャンルの選択肢 */}
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
      </VStack>
   
    </Container>
  );
};

export default IndexPage;