import React, { FC } from "react";
import { Box, Select, Text, useColorModeValue } from "@chakra-ui/react";

export type SelectBoxProps = {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    bgColor: string;
    children: React.ReactNode;
  }

export const SelectBox:FC<SelectBoxProps> = ({placeholder, onChange, bgColor, children}) => (
  <Box>
    <Text color={useColorModeValue("gray.800","white")}>{placeholder}</Text>
    <Select
      placeholder={placeholder}
      onChange={onChange}
      bg={bgColor}
    >
      {children}
    </Select>
  </Box>
);