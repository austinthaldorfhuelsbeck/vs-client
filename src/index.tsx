import React from "react";

import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";

import App from "./App";

// Get root element
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

// Render
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
