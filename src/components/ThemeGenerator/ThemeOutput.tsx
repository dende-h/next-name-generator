import React, { FC } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { ThemeOutputProps } from "./types/themeGeneratorTypes";

// 新たな ThemeOutput コンポーネント
export const ThemeOutput: FC<ThemeOutputProps> = ({ theme }) => (
	<Text color={useColorModeValue("gray.800", "white")}>
		{theme.length > 0 ? `生成テーマ:ジャンル:${theme[0]},ストーリー:${theme[1]},汎用:${theme[2]}` : ""}
	</Text>
);
