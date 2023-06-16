import React, { useEffect, useState } from "react";

export const useButtonDisable = (value: string | undefined) => {
	const [isDisable, setIsDisable] = useState<boolean>(true);

	useEffect(() => {
		value ? setIsDisable(false) : setIsDisable(true);
	}, [value]);

	return isDisable;
};
