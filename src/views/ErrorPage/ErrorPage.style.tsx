import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 100%;
	cursor: default;
`;

export const Status = styled.h1`
	font-size: 30vh;
	font-weight: bold;
	position: relative;
	margin: -8vh 0 0;
	padding: 0;

	&:after {
		content: attr(data-h1);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		color: transparent;
		/* webkit only for graceful degradation to IE */
		background: -webkit-repeating-linear-gradient(
			-45deg,
			#ff44dd,
			#b98acc,
			#69a6ce,
			#ee8176,
			#ff7f38
		);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 400%;
		text-shadow: 1px 1px 2px transparentize(#fff, 0.75);
		animation: animateTextBackground 10s ease-in-out infinite;
	}
`;

export const Message = styled.div`
	color: #d6d6d6;
	font-size: 7vh;
	font-weight: bold;
	line-height: 10vh;
	max-width: 600px;
	position: relative;

	&:after {
		content: attr(data-p);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		color: transparent;
		text-shadow: 1px 1px 2px transparentize(#fff, 0.5);
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
	}
`;
