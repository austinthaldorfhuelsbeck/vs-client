import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.footer`
	display: flex;
	justify-content: space-between;
	flex-shrink: 0;
	width: 100%;
	margin-top: 2rem;
	padding: 0 1rem;
	font-weight: 500;
	text-align: center;
	line-height: 2rem;
`;

export const Copyright = styled.p`
	color: ${({ theme }) => theme.textSoft};
	text-align: left;
	font-weight: 100;
	margin: 0;
	cursor: default;
`;

export const Links = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const FooterLink = styled(Link)`
	letter-spacing: 0.001rem;
	margin: 0 1rem;
	color: ${({ theme }) => theme.textSoft};
	transition: color 0.3s ease-out;
	&:active,
	&:visited {
		color: ${({ theme }) => theme.textSoft};
	}
	&:hover {
		color: ${({ theme }) => theme.aluminium};
	}
`;
