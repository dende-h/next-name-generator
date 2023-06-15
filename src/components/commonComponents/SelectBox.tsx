import React from "react";
import { Box, Select, Text, useColorModeValue } from "@chakra-ui/react";
import { SelectBoxProps } from "./types/selectBoxTypes";

export const SelectBox: React.FC<SelectBoxProps> = ({ placeholder, onChange, children }) => (
	<Box>
		<Text color={useColorModeValue("gray.800", "white")}>{placeholder}</Text>
		<Select placeholder={placeholder} onChange={onChange}>
			{children}
		</Select>
	</Box>
);
