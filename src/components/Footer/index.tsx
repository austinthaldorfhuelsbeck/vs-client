import { ILinkResource } from "../../interfaces/common.interface";
import { Container, Copyright, FooterLink, Links } from "./Footer.style";

const resources: ILinkResource[] = [
	{
		path: "/terms",
		label: "Terms of Service",
	},
	{
		path: "/privacy",
		label: "Privacy Policy",
	},
];

const Footer: React.FC = () => {
	return (
		<Container>
			<Links>
				{resources.map((resource) => (
					<FooterLink
						key={resource.path}
						to={resource.path}
						aria-label={`Link to ${resource.label}`}
					>
						<>{resource.label}</>
					</FooterLink>
				))}
			</Links>
			<Copyright>
				Copyright © 2024 Vowsuite, Inc. All Rights Reserved.
			</Copyright>
		</Container>
	);
};
export default Footer;
