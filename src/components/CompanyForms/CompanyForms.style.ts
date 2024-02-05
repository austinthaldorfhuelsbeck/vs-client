import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 5px;
	background-color: ${({ theme }) => theme.foreground};
	border-radius: 5px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	margin: 10px;
`;

export const Upload = styled.div`
	margin: 0 30px 30px 30px;
`;

export const Hr = styled.hr`
	width: 100%;
	margin-bottom: 20px;
`;

export const Thumbnail = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	margin: 10px auto;
	border-radius: 100%;
`;

export const Select = styled.select`
	border: 1px solid ${({ theme }) => theme.soft};
	color: ${({ theme }) => theme.text};
	border-radius: 3px;
	padding: 10px;
	background-color: transparent;
`;

export const Label = styled.label`
	svg {
		font-size: 14px;
		color: ${({ theme }) => theme.indigo};
		margin-right: 10px;
	}
`;

interface PlayButtonProps {
	$hex1?: string;
	$hex2?: string;
	$hex3?: string;
}

export const PlayButton = styled.div<PlayButtonProps>`
	max-width: 140px;
	text-align: center;
	padding: 1.5rem;
	font-size: 200%;
	text-transform: uppercase;
	color: black;
	letter-spacing: 0.1rem;
	font-weight: 100;
	cursor: pointer;
	border: none;
	border-radius: 3rem;
	margin-bottom: 1rem;

	background-color: ${(props) => props.$hex1};
	color: ${(props) => props.$hex2};

	transition: all 300ms;
	&:hover {
		background-color: ${(props) => props.$hex3};
		transform: scale(1.08);
	}
`;

export const Title = styled.h4`
	margin: 0 0 5px 0;
	font-size: 12px;
	color: ${({ theme }) => theme.text};
`;

export const Desc = styled.div`
	display: flex;
	flex-direction: column;
`;

export const UploadButton = styled.div`
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

	background-color: transparent;
	border: none;
	border-color: ${({ theme }) => `${theme.highlight}`};

	&:hover {
		color: ${({ theme }) => `${theme.background}`};
		background-color: ${({ theme }) => `${theme.textSoft}`};
		border-color: ${({ theme }) => `${theme.background}`};
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
`;