import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	width: 100%;
	height: 100%;
`;

export const FormsContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const PreviewContainer = styled.div`
	flex: 1;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	margin: 10px;
	padding: 10px;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.bgLighter};
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Header = styled.h4`
	color: ${({ theme }) => theme.text};
	margin: auto auto auto 0;
`;

export const CompanyWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	h4 {
		margin-left: 10px;
	}
`;

export const Hr = styled.hr`
	width: 100%;
	margin-top: 10px;
`;

export const UploadButton = styled.div`
	label {
		display: block;
		position: relative;
		min-width: 150px;
		height: 50px;
		border-radius: 25px;
		background: ${({ theme }) => theme.pinkMandarinGradient};
		box-shadow: ${({ theme }) => theme.boxShadow};
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
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
	margin: 0 10px;
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