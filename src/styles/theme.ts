import { IStringHash } from "../interfaces/common.interface";

const theme: IStringHash = {
	orange: "#ff4f40",
	indigo: "#635dff",
	white: "#fff",
	offWhite: "#e8e6e6",
	lightAluminium: "#2d2a2a",
	aluminium: "#bdc4cf",
	darkAluminium: "#181818",
	black: "#000000",
	gray: "#5e5c5c",
	yellow: "#bba34c",
	mandarin: "#ff7f38",
	pink: "#ff44dd",
	blue: "#3885ff",
	aqua: "#3ec6eb",
	emerald: "#1bc99f",
	pinkMandarinGradient:
		"linear-gradient( 153.07deg, #ff44dd -2.47%, #ff7f38 102.78%)",
	boxShadow:
		"0px 3px 1px -2px rgba(0, 0, 0, 0.1), 10px 10px 10px 0px rgba(0, 0, 0, 0.05), 5px 1px 10px 0px rgba(0, 0, 0, 0.05);",
	fontPrimary: "'Inter', sans-serif",
	fontSecondary: "'Space Grotesk', sans-serif",
	fontMono: "'Fira Code', monospace",
};

export const darkTheme: IStringHash = {
	...theme,
	background: theme.darkAluminium,
	bgLighter: theme.lightAluminium,
	foreground: "#4d4a49",
	highlight: "#a3a0a0",
	text: theme.white,
	textSoft: "#a3a0a0",
	soft: "#3c3737",
	contrast: theme.black,
};

export const lightTheme: IStringHash = {
	...theme,
	background: theme.offWhite,
	bgLighter: theme.white,
	foreground: "#f2eded",
	highlight: "#fff9f9",
	text: theme.black,
	textSoft: theme.gray,
	soft: theme.lightAluminium,
	contrast: theme.white,
};
