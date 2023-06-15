import React from "react";
import { SelectOptionProps } from "./types/selectBoxTypes";

export const SelectOption: React.FC<SelectOptionProps> = ({ selectOptions }) => (
	<>
		{selectOptions.map((item, index) => {
			return (
				<option key={index} value={item.value}>
					{item.selectWord}
				</option>
			);
		})}
	</>
);
