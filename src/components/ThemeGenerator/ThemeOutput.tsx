import React, { FC } from "react";
import {Text, useColorModeValue } from "@chakra-ui/react";

type ThemeOutputProps = {
    theme:string;
  }
  
// 新たな ThemeOutput コンポーネント
export const ThemeOutput:FC<ThemeOutputProps> = ({theme}) => (
  <Text color={useColorModeValue("gray.800","white")}>生成された小説のテーマ: {theme}</Text>
);