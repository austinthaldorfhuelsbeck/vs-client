import { styled } from "styled-components";

export const Dialog = styled.dialog`
	position: relative;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	background-color: ${({ theme }) => theme.foreground};
	border-width: 0;
	padding: 0;
	min-width: 400px;
	max-width: 80vw;
	max-height: 90vh;
	border-radius: 10px;
	cursor: default;

	&::backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(1px);
		animation: none;
	}
`;
