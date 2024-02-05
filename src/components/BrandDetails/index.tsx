import React from "react";

import { Link } from "react-router-dom";

import {
	faFacebookF,
	faInstagram,
	faSquareYoutube,
	faTiktok,
	faVimeo,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IUser } from "../../interfaces/models.interface";
import {
	AltSubheader,
	BrandLink,
	Container,
	Header,
	Links,
	Logo,
	Subheader,
} from "./BrandDetails.style";

interface Props {
	user: IUser;
}

const BrandDetails: React.FC<Props> = ({ user }) => {
	return (
		<Container
			$primaryFont={user.primaryFont}
			$secondaryFont={user.secondaryFont}
			$hex1={user.primaryColor}
			$hex2={user.secondaryColor}
			$hex3={user.tertiaryColor}
		>
			<Logo src={user.companyImg} />
			<Header>{user.companyName}</Header>

			<hr />
			{user.social && (
				<>
					<Link
						to={user.social.website}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Subheader>
							<FontAwesomeIcon icon={faExternalLinkSquareAlt} />{" "}
							Visit website
						</Subheader>
					</Link>

					<hr />
					<AltSubheader>Follow us</AltSubheader>
					<Links>
						<BrandLink
							to={user.social.facebook || ""}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faFacebookF} />
						</BrandLink>
						<BrandLink
							to={user.social.instagram || ""}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</BrandLink>
						<BrandLink
							to={user.social.tiktok || ""}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faTiktok} />
						</BrandLink>
						<BrandLink
							to={user.social.vimeo || ""}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faVimeo} />
						</BrandLink>
						<BrandLink
							to={user.social.youtube || ""}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faSquareYoutube} />
						</BrandLink>
					</Links>
					<hr />
				</>
			)}

			<Link to="/" target="_blank" rel="noopener noreferrer">
				<Subheader>Made with Vowsuite</Subheader>
			</Link>
		</Container>
	);
};

export default BrandDetails;
