import { useState } from "react";

type CheckValue = {
	value1: string | undefined;
	value2?: string | undefined;
};

type CheckValueFunction = ({ value1, value2 }: CheckValue) => void;

export const useCheckValueUndefined = () => {
	const [isUndefined, setIsUndefined] = useState<boolean>(true);

	const onCheckValue: CheckValueFunction = ({ value1, value2 }) => {
		if (value2) {
			value1 === undefined || value2 === undefined ? setIsUndefined(true) : setIsUndefined(false);
		} else {
			value1 === undefined ? setIsUndefined(true) : setIsUndefined(false);
		}
	};

	return { isUndefined, onCheckValue };
};
