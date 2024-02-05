// CompanyDetails.tsx
import React from "react";
import BrandDetails from "../../components/BrandDetails";
import Branding from "../../components/CompanyForms/Branding";
import Details from "../../components/CompanyForms/Details";
import SocialLinks from "../../components/CompanyForms/SocialLinks";
import { useUser } from "../../context/contextProvider";
import { FormRow } from "../../styles/forms.style";
import Greeting from "./Greeting";
import {
	CompanyWrapper,
	FormsContainer,
	Hr,
	PreviewContainer,
} from "./Studio.style";

const CompanyDetails: React.FC = () => {
	const { currentUser } = useUser();
	return (
		<>
			<FormRow>
				<Greeting name={currentUser?.name} />
				{/* <InlineButton onClick={(e) => e.preventDefault()} $secondary>
					<FontAwesomeIcon icon={faExternalLinkAlt} /> Branding FAQs
				</InlineButton> */}
			</FormRow>
			<Hr />
			<CompanyWrapper>
				<FormsContainer>
					<Details />
					<Branding />
					<SocialLinks />
				</FormsContainer>
				{currentUser && (
					<PreviewContainer>
						<BrandDetails user={currentUser} />
					</PreviewContainer>
				)}
			</CompanyWrapper>
		</>
	);
};

export default CompanyDetails;
