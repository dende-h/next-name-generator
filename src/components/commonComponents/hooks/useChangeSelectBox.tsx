import { useState } from "react";

export const useChangeSelectBox = () => {
	const [selectValue, setSelectValue] = useState<string | undefined>(undefined);

	const onChangeSelectValue: (e: React.ChangeEvent<HTMLSelectElement>) => void = (e) => {
		setSelectValue(e.target.value);
	};

	return { selectValue, onChangeSelectValue };
};
