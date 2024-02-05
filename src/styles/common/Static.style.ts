import { styled } from "styled-components";

export const Static = styled.div`
	max-width: 800px;
	margin: 0 auto;
	h1,
	h4 {
		text-align: center;
	}
	h1,
	h5 {
		color: var(--white);
	}
	h4,
	a {
		color: var(--yellow);
	}
	p,
	ul {
		font-size: 120%;
		line-height: 1.7rem;
	}
	ol {
		list-style-type: none;
	}
`;
