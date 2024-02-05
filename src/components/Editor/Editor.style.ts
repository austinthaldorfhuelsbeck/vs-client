import styled from "styled-components";
import { InlineButton } from "../../styles/common/common.style";

export const Container = styled.div`
	border: 1px solid ${({ theme }) => `${theme.foreground}`};
	display: flex;
	width: 65vw;
`;

export const ContentWrapper = styled.div`
	padding: 20px;
	flex: 7;
`;

export const FormWrapper = styled.div`
	background-color: ${({ theme }) => `${theme.background}`};
	padding: 10px;
	flex: 3;
`;

export const Desc = styled.div`
	padding: 5px;
	color: ${({ theme }) => `${theme.textSoft}`};
`;

export const Player = styled.div`
	border-radius: 10px;
	overflow: hidden;
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
`;

export const Header = styled.h4`
	font-size: 22px;
	font-weight: 600;
	margin: 0 auto 0 0;
	color: ${({ theme }) => theme.text};
	cursor: default;
`;

export const Subheader = styled.p`
	font-size: 10px;
	margin-left: 10px;
	color: ${({ theme }) => theme.text};
	cursor: default;
`;

export const Button = styled(InlineButton)`
	width: 100%;
`;

export const Controls = styled.div`
	display: flex;
	margin-top: 20px;
	justify-content: space-between;
`;

export const Hr = styled.hr`
	width: 100%;
	margin: 30px 0;
`;

export const Thumbnail = styled.img`
	object-fit: cover;
	width: 100%;
	border: 1px solid ${({ theme }) => `${theme.foreground}`};
	border-radius: 3px;
`;

export const UploadButton = styled.div`
	label {
		display: block;
		position: relative;
		padding: 10px;
		margin: 10px 0;
		border-radius: 10px;
		font-family: ${({ theme }) => theme.fontSecondary};
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
		transform: scale(1.05);
	}
`;

export const ProgressContainer = styled.div`
	display: inline-flex;
	width: 100%;
	margin: 0 20px;
`;

export const ProgressBar = styled.div`
	display: inline-flex;
	height: 10px;
	width: 100%;
	margin: 10px;
	position: relative;
`;

const BaseBox = styled.div`
	display: inline-flex;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	border-radius: 3px;
	transition: width 0.3 ease-in-out;
`;

export const ProgressBackground = styled(BaseBox)`
	background: grey;
	width: 100%;
`;

interface PercentProps {
	percent: number;
}
export const Progress = styled(BaseBox)<PercentProps>`
	background: ${({ theme }) => theme.pinkMandarinGradient};
	width: ${({ percent }) => percent}%;
`;