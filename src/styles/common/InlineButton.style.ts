import { styled } from "styled-components";

interface Props {
	$primary?: boolean;
	$secondary?: boolean;
}
export const InlineButton = styled.button<Props>`
	cursor: pointer;
	user-select: none;
	transition: ease 0.3s;
	border-radius: 0.8rem;
	font-size: 12px;
	padding: 12px 15px;
	letter-spacing: 0.11rem;
	font-weight: 600;
	font-family: ${({ theme }) => theme.fontPrimary};
	color: ${({ theme }) => `${theme.text}`};

	background-color: ${(props) =>
		props.$primary ? "#635dff" : "transparent"};
	border: ${(props) =>
		props.$primary || props.$secondary ? "none" : "1px solid"};
	border-color: ${({ theme }) => `${theme.highlight}`};

	&:hover {
		color: ${({ theme }) => `${theme.background}`};
		background-color: ${({ theme }) => `${theme.textSoft}`};
		border-color: ${({ theme }) => `${theme.background}`};
	}
`;
