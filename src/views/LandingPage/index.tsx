import React from "react";

import { Container, Description, Headline } from "./LandingPage.style";

const HeroBanner: React.FC = () => {
	return (
		<Container>
			<Headline>Deliver videos with Vowsuite</Headline>
			<Description>It's the best for delivering videos.</Description>
		</Container>
	);
};

const LandingPage: React.FC = () => {
	return (
		<>
			<HeroBanner />
		</>
	);
};

export default LandingPage;
