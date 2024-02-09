import React from "react";

import { Container, Description, Headline } from "./LandingPage.style";

const HeroBanner: React.FC = () => {
	return (
		<Container>
			<Headline>Deliver videos with Vowsuite</Headline>
			<Description>Login with the username test@test.com and password 123456</Description>
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
