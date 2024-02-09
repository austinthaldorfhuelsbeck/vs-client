import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	background: ${({ theme }) => theme.pinkMandarinGradient};
	color: ${({ theme }) => theme.text};
	margin: 0 auto;
	padding: 3.2rem 6.4rem;
`;

export const Headline = styled.h1`
	letter-spacing: -1.5px;
	margin: 2.4rem 0 8px 0;
	font-size: 4.8rem;
	font-family: ${({ theme }) => theme.fontSecondary};
	color: ${({ theme }) => theme.text};
`;

export const Description = styled.p`
	font-family: ${({ theme }) => theme.fontSecondary};
	max-width: 58rem;
	text-align: center;
	margin-bottom: 3.2rem;
	font-size: 20px;
	line-height: 3.2rem;
`;

export const Button = styled.button`
	border: ${({ theme }) => `1px solid ${theme.soft}`};
	border-radius: 0.8rem;
	background-color: ${({ theme }) => `${theme.soft}a7`};
	font-family: ${({ theme }) => theme.fontPrimary};
	font-weight: 600;
	color: ${({ theme }) => theme.text};
	cursor: pointer;
	user-select: none;
	min-width: 10rem;
	padding: 1.6rem 1.6rem;
	font-size: 1.6rem;
	line-height: 2.4rem;
	&:hover {
		background-color: ${({ theme }) => `${theme.soft}`};
	}
`;

export const Img = styled.img`
	object-fit: cover;
	width: 100%;
	height: 500px;
	box-shadow: ${({ theme }) => `${theme.boxShadow}`};
`;