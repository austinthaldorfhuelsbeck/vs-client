import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
	display: flex;
`;

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const Main = styled.div`
	flex: 6;
	background-color: ${({ theme }) => theme.background};
	min-height: 100vh;
`;

const spinAnimation = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(720deg); }
`;
export const Loader = styled(FontAwesomeIcon)`
	color: ${({ theme }) => theme.text};
	font-size: 500%;
	margin: 15px auto;
	animation-name: ${spinAnimation};
	animation-duration: 2.5s;
	animation-iteration-count: infinite;
`;

export const Content = styled.div`
	flex: 1;
	flex-basis: auto;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
`;
