import { SyntheticEvent, useEffect, useState } from "react";

const useDarkMode = () => {
	const [theme, setTheme] = useState("light");
	const isDarkMode = theme === "dark";
	// handler for svg element
	const toggleTheme = (e: SyntheticEvent<HTMLOrSVGElement>) => {
		e.preventDefault();
		const updatedTheme = isDarkMode ? "light" : "dark";
		setTheme(updatedTheme);
		localStorage.setItem("theme", updatedTheme);
	};
	// follow user preference and persist
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (savedTheme && ["dark", "light"].includes(savedTheme)) {
			setTheme(savedTheme);
		} else if (prefersDark) {
			setTheme("dark");
		}
	}, []);
	return { isDarkMode, toggleTheme };
};

export default useDarkMode;