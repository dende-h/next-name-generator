// IndexPage.js
import React from "react";
import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import { Container, VStack } from "@chakra-ui/react";
import NameGenerator from "../components/NameGenerator";
import ThemeGenerator from "../components/ThemeGenerator";

const IndexPage = () => {
  return (
    <Container maxW="container.xl" position="relative">
      <DarkModeSwitch />
      <VStack spacing={8} align="stretch" bg="gray.600" p={4} borderRadius="md" boxShadow="xl">
        <NameGenerator />
        <ThemeGenerator />
      </VStack>
    </Container>
  );
};

export default IndexPage;
