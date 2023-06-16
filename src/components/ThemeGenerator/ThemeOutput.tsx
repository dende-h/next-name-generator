import React, { FC } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { ThemeOutputProps } from "./types/themeGeneratorTypes";

// 新たな ThemeOutput コンポーネント
export const ThemeOutput: FC<ThemeOutputProps> = ({ theme }) => (
	<Text color={useColorModeValue("gray.800", "white")}>
		生成テーマ：{theme.length > 0 ? `【${theme[0]}】,【${theme[1]}】,【${theme[2]}】` : ""}
	</Text>
);
