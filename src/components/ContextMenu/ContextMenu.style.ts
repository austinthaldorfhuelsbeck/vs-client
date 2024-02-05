import styled from "styled-components";

interface ContainerProps {
	x: number;
	y: number;
}
export const Container = styled.ul<ContainerProps>`
	position: absolute;
	left: ${(props) => `${props.x}px`};
	top: ${(props) => `${props.y}px`};
	min-width: 16rem;
	background-color: ${({ theme }) => `${theme.foreground}`};
	border: 1px solid ${({ theme }) => theme.highlight};
	border-radius: 0.5rem;
	padding: 0;
	transition: background 0.3s ease-out;
	z-index: 1;

	& li {
	}
`;

export const Button = styled.button`
	align-self: end;
	margin-left: auto;
	padding: 0.3rem;
	color: ${({ theme }) => theme.text};
	background: none;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
`;

interface LIProps {
	$danger?: boolean;
}
export const ListItem = styled.li<LIProps>`
	width: 100%;
	display: flex;
	/* border-radius: 5px; */
	justify-content: start;
	padding: 1.5rem 1.8rem;
	cursor: pointer;
	font-size: 13px;
	letter-spacing: 0.05rem;
	line-height: 16px;
	transition: ease 0.3s;
	background-color: ${(props) => (props.$danger ? "#ff4f40" : "transparent")};
	border-radius: ${(props) => (props.$danger ? "0 0 5px 5px" : "none")};

	&:hover {
		background-color: ${({ theme }) => theme.highlight};
		label {
			text-decoration-line: underline;
			text-decoration-style: solid;
			text-decoration-color: ${({ theme }) => theme.indigo};
			text-decoration-thickness: 2px;
			text-underline-offset: 8px;
		}
	}
`;

export const Label = styled.label`
	padding: 0 1rem;
	cursor: pointer;
	color: ${({ theme }) => theme.text};
`;
