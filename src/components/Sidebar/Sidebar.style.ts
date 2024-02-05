import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { InlineButton } from "../../styles/common/common.style";

export const Container = styled.div`
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	min-width: 255px;
	margin: 20px 0 0 0;
`;

export const Wrapper = styled.div`
	padding: 0 20px;
`;

export const Company = styled.div`
	align-self: baseline;
	cursor: pointer;
	font-weight: 500;
	color: ${({ theme }) => theme.textSoft};
	font-size: 14px;
	line-height: 16px;
	background: none;
	padding: 1rem;
	border: none;
	transition: color 0.3s ease-out;
	&:hover {
		color: ${({ theme }) => theme.text};
	}
`;

export const Label = styled.label`
	padding: 0 1rem;
	cursor: pointer;
`;

export const HeaderContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-shrink: 0;
	height: 6rem;
	max-height: 8rem;
	width: 100%;
	max-width: 1200px;
	padding-left: 1rem;
	margin: 0;
`;

export const Button = styled(InlineButton)`
	width: 100%;
`;

export const Selector = styled.li`
	display: flex;
	align-items: center;
	background: none;
	cursor: pointer;
	margin-top: 1.6rem;
	color: ${({ theme }) => theme.textSoft};
	font-size: 14px;
	line-height: 16px;
	list-style-type: none;
	border-radius: 0 1rem 1rem 0;
	width: 100%;
	transition: ease 0.3s;

	&:hover {
		color: ${({ theme }) => theme.text};
		background-color: ${({ theme }) => theme.highlight};
	}

	${(props) =>
		props["aria-selected"] &&
		css`
			background-color: ${({ theme }) => theme.foreground};
			text-decoration-line: underline;
			text-decoration-style: solid;
			text-decoration-color: ${({ theme }) => theme.indigo};
			text-decoration-thickness: 2px;
			text-underline-offset: 8px;
		`}
`;

export const Icon = styled(FontAwesomeIcon)`
	padding: 3px 5px;
	margin: 3px;
	border-radius: 3px;
	transform: rotate(90deg);
	transition: ease 0.3s;
	&:hover {
		background-color: ${({ theme }) => theme.highlight};
	}
`;

export const SidebarLabel = styled(Label)`
	padding: 1.5rem 1rem 2rem 1rem;
	width: 100%;
`;

export const Thumbnail = styled.img`
	object-fit: cover;
	width: 500px;
	height: 282px;
	border-radius: 5px;
	margin: 5px;
	border: 1px solid ${({ theme }) => `${theme.foreground}`};
	border-radius: 3px;
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
