import {
	IconDefinition,
	faFacebookF,
	faInstagram,
	faSquareYoutube,
	faTiktok,
	faVimeo,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent } from "react";
import useCompanyForm from "../../hooks/useCompanyForm";
import { Alert, InlineButton } from "../../styles/common/common.style";
import {
	Buttons,
	FormHeader,
	FormSubheader,
	Input,
} from "../../styles/forms.style";
import { Form, Hr, Label } from "./CompanyForms.style";

interface Props {
	icon: IconDefinition;
	name: string;
	placeholder?: string;
	value: string | undefined;
	onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}
const SocialMediaInput: React.FC<Props> = ({
	icon,
	name,
	placeholder,
	value,
	onChange,
}) => (
	<>
		<Label>
			<FontAwesomeIcon icon={icon} />
			{placeholder}
		</Label>
		<Input
			type="text"
			name={name}
			placeholder={`${placeholder} URL`}
			value={value}
			onChange={onChange}
		/>
	</>
);

const SocialLinks: React.FC = () => {
	const { socialFormData, onSocialChange, onSubmit, success, error } =
		useCompanyForm();

	return (
		<Form noValidate autoComplete="off" onSubmit={onSubmit}>
			<FormHeader>Website</FormHeader>
			<FormSubheader>
				Your Website or Portfolio URL (include https://)
			</FormSubheader>
			<Input
				type="text"
				name="website"
				placeholder="Website URL"
				value={socialFormData.website}
				onChange={onSocialChange}
			/>

			<FormHeader>Social Media Profiles</FormHeader>
			<FormSubheader>
				URLs for your social media profiles (include https://)
			</FormSubheader>

			<SocialMediaInput
				icon={faFacebookF}
				name="facebook"
				placeholder="Facebook"
				value={socialFormData.facebook}
				onChange={onSocialChange}
			/>
			<SocialMediaInput
				icon={faInstagram}
				name="instagram"
				placeholder="Instagram"
				value={socialFormData.instagram}
				onChange={onSocialChange}
			/>
			<SocialMediaInput
				icon={faTiktok}
				name="tiktok"
				placeholder="TikTok"
				value={socialFormData.tiktok}
				onChange={onSocialChange}
			/>
			<SocialMediaInput
				icon={faVimeo}
				name="vimeo"
				placeholder="Vimeo"
				value={socialFormData.vimeo}
				onChange={onSocialChange}
			/>
			<SocialMediaInput
				icon={faSquareYoutube}
				name="youtube"
				placeholder="Youtube"
				value={socialFormData.youtube}
				onChange={onSocialChange}
			/>

			<Hr />
			<Buttons>
				<InlineButton type="submit" $primary>
					Save
				</InlineButton>
			</Buttons>
			{error && <Alert $error={error}>{error.message}</Alert>}
			{success && <Alert $success={success}>{success}</Alert>}
		</Form>
	);
};

export default SocialLinks;
