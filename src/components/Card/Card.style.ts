import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

export const Container = styled.li`
	cursor: default;
	display: inline-grid;
	box-shadow: ${({ theme }) => theme.boxShadow};
	background-color: ${({ theme }) => theme.foreground};
	transition: ease 0.3s;
	border-radius: 5px;
	margin: 10px;

	&:hover {
		box-shadow: ${({ theme }) => `0 0 20px 3px ${theme.highlight}`};
	}
`;

interface ImgProps {
	src: string;
}
export const Img = styled.div<ImgProps>`
	display: flex;
	cursor: pointer;
	border-radius: 5px 5px 0 0;
	width: 305px;
	height: 170px;
	background-image: ${(props) => `url(${props.src})`};
	background-size: cover;

	&:hover {
		svg {
			opacity: 1;
		}
	}
`;

export const Desc = styled.div`
	display: flex;
	justify-content: space-between;
	flex-shrink: 0;
	width: 100%;
	padding: 5px;
`;

export const Header = styled.h4`
	font-size: 12px;
	margin: auto 0;
	color: ${({ theme }) => theme.text};
`;

export const Ellipsis = styled(FontAwesomeIcon)`
	padding: 5px;
	border-radius: 3px;
	transition: ease 0.3s;
	&:hover {
		background-color: ${({ theme }) => theme.highlight};
	}
`;

export const Icon = styled(FontAwesomeIcon)`
	margin: auto;
	font-size: 96px;
	opacity: 0;
	transition: 0.3s;
	color: ${({ theme }) => theme.white};
`;
