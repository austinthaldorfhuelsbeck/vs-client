import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-shrink: 0;
	position: sticky;
	top: 0;
	height: 56px;
	background-color: ${({ theme }) => theme.bgLighter};
	color: ${({ theme }) => theme.text};
	padding: 0 20px;
	width: 100%;
	box-shadow: ${({ theme }) => theme.boxShadow};
	z-index: 1;
`;

export const Icon = styled(FontAwesomeIcon)`
	cursor: pointer;
	border-radius: 5px;
	color: ${({ theme }) => theme.text};
	padding: 10px;
	font-size: 18px;
	transition: all ease 0.3s;
	margin: 0 10px 0 auto;
	&:hover {
		background-color: ${({ theme }) => theme.text};
		color: ${({ theme }) => theme.background};
	}
`;

export const LogoLink = styled(NavLink)`
	display: flex;
	align-items: center;
	height: 100%;
`;

export const Logo = styled.h1`
	color: ${({ theme }) => theme.text};
	margin: 0 20px 0 0;
	font-family: ${({ theme }) => theme.fontSecondary};
	font-size: 22px;
`;

export const Button = styled.button`
	min-width: 8.4rem;
	border: 1px solid ${({ theme }) => theme.indigo};
	background: ${({ theme }) => theme.indigo};
	color: white;
	font-size: 1.6rem;
	margin: 10px;
	font-family: ${({ theme }) => theme.fontPrimary};
	font-style: normal;
	font-weight: 600;
	line-height: 3.2rem;
	border-radius: 10px;
	text-align: center;
	cursor: pointer;
	user-select: none;
	transition: background 0.3s ease-out;
	&:hover {
		background: ${({ theme }) => `${theme.indigo}a7`};
	}
`;

export const ProfileImg = styled.img`
	object-fit: cover;
	width: 40px;
	height: 40px;
	margin: auto 0 auto auto;
	margin: auto 0;
	border-radius: 100%;
	cursor: pointer;
`;

export const Company = styled.div`
	cursor: pointer;
	margin: 0 auto 0 10px;
	font-weight: 500;
	color: ${({ theme }) => theme.textSoft};
	font-size: 14px;
	line-height: 16px;
	background: none;
	border-radius: 5px;
	padding: 10px 0px;
	border: none;
	transition: ease 0.3s;
	&:hover {
		color: ${({ theme }) => theme.text};
		background-color: ${({ theme }) => theme.highlight};
	}

	svg {
		margin-left: 5px;
		font-size: 10px;
	}
`;

export const Img = styled.img`
	width: 50px;
	border-radius: 100%;
	cursor: pointer;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const Hr = styled.hr`
	width: 100%;
`;

export const Thumbnail = styled.img`
	object-fit: cover;
	height: 250px;
	width: 250px;
	margin: 0 auto;
	border: 1px solid ${({ theme }) => `${theme.foreground}`};
	border-radius: 100%;
`;

export const UploadButton = styled.div`
	label {
		display: block;
		position: relative;
		padding: 10px 0;
		margin: 10px 0;
		border-radius: 10px;
		background: ${({ theme }) => theme.indigo};
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${({ theme }) => theme.text};
		font-size: 14px;
		font-weight: bold;
		cursor: pointer;
		transition: transform 0.2s ease-out;
	}
	svg {
		padding-right: 5px;
	}
	input:hover + label,
	input:focus + label {
		transform: scale(1.02);
	}
`;
