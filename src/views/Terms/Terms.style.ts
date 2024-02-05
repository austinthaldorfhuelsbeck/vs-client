import { styled } from "styled-components";

export const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
`;

export const Title = styled.h1`
	text-align: center;
	color: var(--white);
`;

export const Subtitle = styled.h4`
	text-align: center;
	color: var(--yellow);
`;

export const Link = styled.a`
	color: var(--yellow);
`;

export const Paragraph = styled.p`
	font-size: 120%;
	line-height: 1.7rem;
`;

export const OrderedList = styled.ol`
	list-style-type: none;
`;

export const ListItem = styled.li`
	font-size: 120%;
	line-height: 1.7rem;
`;
