import React, { FC } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { NameOutputProps } from "./Types/nameGeneratorTypes";

export const NameOutput: FC<NameOutputProps> = ({ name }) => (
	<Text color={useColorModeValue("gray.800", "white")}>生成名:{name}</Text>
);
