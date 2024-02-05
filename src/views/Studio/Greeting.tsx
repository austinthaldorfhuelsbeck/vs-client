import React from "react";
import { Header } from "./Studio.style";

// Greeting Component
const Greeting: React.FC<{ name?: string }> = ({ name }) => {
	const now = new Date();
	const hour: number = Number(now.toString().split(" ")[4].slice(0, 2));
	let message: string = `Hello, ${name}! 👋`;
	if (hour < 4) message = `Burning that midnight oil, ${name}? 💤`;
	if (4 <= hour && hour < 12) message = `Good morning, ${name}! 🔆`;
	if (12 <= hour && hour < 17) message = `Good afternoon, ${name}! 👋`;
	if (17 <= hour) message = `Good evening, ${name}! 🌙`;
	return <Header>{message}</Header>;
};

export default Greeting;