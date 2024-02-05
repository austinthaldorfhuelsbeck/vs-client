import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface Props {
	$primaryFont?: string;
	$secondaryFont?: string;
	$hex1?: string;
	$hex2?: string;
	$hex3?: string;
}

export const Container = styled.div<Props>`
	position: sticky;
	top: 70px;
	margin: 0 auto;
	padding: 20px 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 120%;
	background-color: ${(props) => props.$hex3};
	border-radius: 10px;
	cursor: default;
	box-shadow: ${({ theme }) => theme.boxShadow};

	h1,
	h4 {
		font-family: ${(props) => props.$primaryFont};
		font-weight: 200;
	}

	h5,
	h6 {
		text-transform: uppercase;
		margin: 0.5rem 0 0 0;
		font-size: 100%;
		letter-spacing: 0.2rem;
		font-weight: 100;
	}

	a,
	h6 {
		color: ${(props) => props.$hex1};
	}

	hr,
	a {
		border-color: ${(props) => props.$hex2};
	}

	hr {
		opacity: 50%;
		margin: 2rem;
	}

	button {
		background-color: ${(props) => props.$hex1};
		margin-bottom: 1rem;
		color: ${(props) => props.$hex2};

		&:hover {
			background-color: ${(props) => props.$hex3};
		}
	}

	h4,
	h5 {
		color: ${(props) => props.$hex2};
	}
	a,
	h6 {
		color: ${(props) => props.$hex1};
	}
`;

export const Logo = styled.img`
	border-radius: 100%;
	width: 70px;
	height: 70px;
	margin-bottom: 20px;
`;

// export const BrandInfo = styled.div`
// 	padding: 1rem 0 0 2rem;
// `;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5px 0 0 auto;
	align-items: end;
`;

export const Links = styled.div`
	display: flex;
`;

export const Header = styled.h4`
	color: ${({ theme }) => theme.text};
`;

export const AltSubheader = styled.h5`
	color: ${({ theme }) => theme.text};
`;

export const Subheader = styled.h6`
	cursor: pointer;
	padding: 10px;
	border-radius: 5px;
	transition: ease 0.3s;

	&:hover {
		background: rgb(255, 255, 255, 0.4);
	}
`;

export const HeaderLink = styled(FontAwesomeIcon)`
	font-size: 250%;
	padding: 1rem;
	margin: 0 0.5rem 0 0.5rem;
	background: rgb(255, 255, 255, 0.2);
	border-radius: 0.5rem;
	cursor: pointer;

	transition: all 300ms;
	&:hover {
		background: rgb(255, 255, 255, 0.4);
	}
`;

export const BrandLink = styled(Link)`
	width: 40px;
	height: 40px;
	cursor: pointer;
	font-size: 18px;
	text-align: center;
	padding: 5px 10px;
	border: solid;
	border-radius: 100%;
	margin: 20px 5px 0 5px;
`;
