import React from "react";

import vowsuiteCompany from "../../assets/img/vowsuite-company.png";
import vowsuiteGallery from "../../assets/img/vowsuite-gallery.png";
import vowsuiteStudio from "../../assets/img/vowsuite-studio.png";
import { Container, Description, Headline, Img } from "./LandingPage.style";

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
			<Img src={vowsuiteGallery} />
			<Img src={vowsuiteCompany} />
			<Img src={vowsuiteStudio} />
		</>
	);
};

export default LandingPage;
