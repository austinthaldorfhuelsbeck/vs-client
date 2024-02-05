import React from "react";

import { Link } from "react-router-dom";

import { Button, Container, Description, Headline } from "./LandingPage.style";

const HeroBanner: React.FC = () => {
	return (
		<Container>
			<Headline>Deliver videos with Vowsuite</Headline>
			<Description>It's the best for delivering videos.</Description>
			<Link to="/studio">
				<Button>Check out the Studio →</Button>
			</Link>
		</Container>
	);
};

// TODO other content
const LandingPage: React.FC = () => {
	return (
		<>
			<HeroBanner />
		</>
	);
};

export default LandingPage;
