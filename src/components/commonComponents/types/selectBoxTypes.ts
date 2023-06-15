export type SelectBoxProps = {
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	children: React.ReactNode;
	label: string;
};

export type SelectOption = { selectWord: string; value: string };

export type SelectOptionProps = {
	selectOptions: SelectOption[];
};
