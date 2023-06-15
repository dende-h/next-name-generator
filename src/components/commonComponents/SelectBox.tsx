import React from "react";
import { Box, Select, Text, useColorModeValue } from "@chakra-ui/react";
import { SelectBoxProps } from "./types/selectBoxTypes";

export const SelectBox: React.FC<SelectBoxProps> = ({ placeholder, onChange, children, label }) => {
	const selectBgColor = useColorModeValue("gray.100", "gray.900");
	return (
		<Box>
			<Text color={useColorModeValue("gray.800", "white")}>{label}</Text>
			<Select placeholder={placeholder} onChange={onChange} defaultValue={undefined} bg={selectBgColor}>
				{children}
			</Select>
		</Box>
	);
};
