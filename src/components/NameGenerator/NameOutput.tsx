import React, { FC } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

export type NameOutputProps = {
    name:string;
  }

export const NameOutput:FC<NameOutputProps> = ({name}) => (
  <Text color={useColorModeValue("gray.800","white")}>生成された名前: {name}</Text>
);