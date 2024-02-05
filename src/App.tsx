// App.tsx
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Container, Loader, Main } from "./App.style";
import ContextProvider from "./context/contextProvider";
import useDarkMode from "./hooks/useDarkMode";
import createRoutes from "./routes";
import { GlobalStyles } from "./styles/global-styles.style";
import { darkTheme, lightTheme } from "./styles/theme";

const App: React.FC = () => {
	const { isDarkMode, toggleTheme } = useDarkMode();
	const routes = createRoutes(toggleTheme, isDarkMode);
	const content = useRoutes(routes);

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<ContextProvider>
				<GlobalStyles />
				<Container>
					<Main>
						{content ? content : <Loader icon={faSpinner} />}
					</Main>
				</Container>
			</ContextProvider>
		</ThemeProvider>
	);
};

export default App;
