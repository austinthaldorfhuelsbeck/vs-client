import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

export const CloseButton = styled(FontAwesomeIcon)`
	text-align: right;
	margin-left: auto;
	cursor: pointer;
	padding: 10px;
	background: transparent;
	border-radius: 5px;
	font-size: 10px;
	color: ${({ theme }) => theme.text};
	transition: ease 0.3s;
	&:hover {
		background-color: ${({ theme }) => theme.soft};
	}
`;
