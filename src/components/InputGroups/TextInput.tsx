import React, { ChangeEvent } from "react";
import { Input } from "../../styles/forms.style";
import { Container, MaxLength } from "./InputGroups.style";

interface Props {
	name: string;
	label: string;
	value: string | undefined;
	limited?: boolean;
	password?: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = ({
	name,
	label,
	value,
	limited,
	password,
	onChange,
}) => {
	return (
		<Container>
			<label htmlFor={name}>{label}</label>
			<Input
				type={password ? "password" : "text"}
				name={name}
				maxLength={35}
				value={value}
				onChange={onChange}
			/>
			{limited && <MaxLength>{`${value?.length}/35`}</MaxLength>}
		</Container>
	);
};

export default TextInput;