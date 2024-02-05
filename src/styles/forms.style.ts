import { styled } from "styled-components";

export const Input = styled.input`
	cursor: text;
	font-size: 14px;
	margin: 5px 0;
	width: 100%;
	color: ${({ theme }) => theme.text};
	border-color: ${({ theme }) => theme.textSoft};
	cursor: ${(props) => (props.type === "color" ? "pointer" : "text")};
`;

export const FormHeader = styled.h4`
	font-size: 16px;
	font-weight: 600;
	margin: 0 auto 10px 0;
	color: ${({ theme }) => theme.text};
	cursor: default;
`;

export const FormSubheader = styled.p`
	color: ${({ theme }) => theme.textSoft};
	font-size: 12px;
	margin: 0 0 10px 0;
	cursor: default;
	svg {
		margin-right: 10px;
	}
`;

export const FormRow = styled.div`
	display: flex;
	padding: 10px;
`;

export const FormColumn = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin: 0.5rem;
`;

export const Buttons = styled.div`
	display: flex;
	gap: 8px;
	justify-content: flex-end;
`;