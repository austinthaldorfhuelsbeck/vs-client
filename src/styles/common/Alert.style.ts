import { styled } from "styled-components";
import { IAppError } from "../../interfaces/api.interface";

interface AlertProps {
	$error?: IAppError;
	$success?: string;
}
export const Alert = styled.div<AlertProps>`
	font-family: monospace;
	padding: 10px;
	margin: 5px;
	border-radius: 10px;
	background-color: ${(AlertProps) => {
		if (AlertProps.$error) return "#ff4f40";
		if (AlertProps.$success) return "#1bc99f";
		return "#bdc4cf";
	}};
	color: ${(AlertProps) => (AlertProps.$error ? "white" : "#2e3137")};
`;
