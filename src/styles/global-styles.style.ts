import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
        text-rendering: geometricPrecision;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        min-height: 100vh;
    }

    html,
    body {
		background-color: ${({ theme }) => theme.background};
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        ::-webkit-scrollbar {display:none;}
        min-height: 100vh;
    }

    body {

		color: ${({ theme }) => theme.text};
        font-family: ${({ theme }) => theme.fontPrimary};

        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        overflow-y: scroll;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${({ theme }) => theme.fontSecondary};
        font-weight: 600;
		color: ${({ theme }) => theme.soft};
    }

    h1,
    h2,
    h3 {
        margin-top: 3.2rem;
        margin-bottom: 1.6rem;
    }

    h4,
    h5,
    h6 {
        margin-top: 1.6rem;
        margin-bottom: 1.6rem;
    }

    h1 {
        font-size: 3.2rem;
    }

    h2 {
        font-size: 2.8rem;
    }

    h3 {
        font-size: 2.4rem;
    }

    h4 {
        font-size: 2rem;
    }

    h5 {
        font-size: 1.6rem;
    }

    h6 {
        font-size: 1.4rem;
    }

    p {
        margin: 0 0 1.6rem;
    }

    hr {
        border: 1px solid ${({ theme }) => theme.textSoft};
		opacity: 10%;
        border-bottom: none;
        width: 100%;
        margin: 10px 0;
    }

    ul {
	list-style: none;
	padding-inline-start: 0;
    }

    strong {
        font-weight: 500;
    }

    small {
        font-size: 1.2rem;
    }

    blockquote {
        padding: 1.6rem 3.2rem;
        margin: 0 0 3.2rem;

        border-left: 8px solid #eee;

        font-size: 1.6rem;
        font-style: italic;
    }

    input[type="file"] {
        display: none;
    }

    input[type="color"] {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        background: none;
        border: 0;
        cursor: pointer;
        height: 100px;
        padding: 0;
        width: 100px;
    }

    body,
    button,
    input,
    select,
    textarea {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    button,
    input,
    select,
    textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    form {
        position: relative;
        padding: 15px;
		color: ${({ theme }) => theme.textSoft};

        label {
            font-family: monospace;
            margin: 5px 0;
            padding: 0;
        }

        input,
        select {
            padding: 0.5rem;
            font: inherit;
            background: transparent !important;
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: solid 0.1rem;
            outline: none;
            max-width: 100%;
            vertical-align: bottom;
        }

        p {
            font-size: 75%;
            margin-left: auto;
            margin-bottom: 0;
        }
    }

    a {
		color: ${({ theme }) => theme.text};
        text-decoration: none;
    }

    figure {
        margin: 0;
    }

    img {
        vertical-align: middle;
    }

    code,
    pre {
        font-family: "Fira Code", source-code-pro, Menlo, Monaco, Consolas,
            "Courier New", monospace;
        width: 100%;
    }

    code {
		color: ${({ theme }) => theme.emerald};
    }

    #root {
        height: 100%;
        width: 100%;
    }

    @media only screen and (max-width: 640px) {
        .mobile-scroll-lock {
            overflow: hidden;
        }
    }
`;
