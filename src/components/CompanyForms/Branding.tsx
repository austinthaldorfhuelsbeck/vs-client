import { faBrush, faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useCompanyForm from "../../hooks/useCompanyForm";
import { Alert, InlineButton } from "../../styles/common/common.style";
import {
	Buttons,
	FormColumn,
	FormHeader,
	FormRow,
	FormSubheader,
	Input,
} from "../../styles/forms.style";
import { Form, Label, Row, Select } from "./CompanyForms.style";
import fonts, { IFont } from "./fonts";

const Branding: React.FC = () => {
	const { formData, onChange, onSubmit, success, error } = useCompanyForm();

	// Reusable font options
	const fontOptions = fonts.map((font: IFont) => (
		<option key={font._id} value={font._id}>
			{font.name}
		</option>
	));

	return (
		<Form noValidate autoComplete="off" onSubmit={onSubmit}>
			<FormHeader>Branding</FormHeader>
			<FormSubheader>
				<FontAwesomeIcon icon={faFont} />
				Choose Typefaces:
			</FormSubheader>
			<FormRow>
				<FormColumn>
					<Label htmlFor="primaryFont">Heading</Label>
					<Select
						name="primaryFont"
						value={formData.primaryFont}
						onChange={onChange}
					>
						{fontOptions}
					</Select>
				</FormColumn>
				<FormColumn>
					<Label htmlFor="secondaryFont">Body</Label>
					<Select
						name="secondaryFont"
						value={formData.secondaryFont}
						onChange={onChange}
					>
						{fontOptions}
					</Select>
				</FormColumn>
			</FormRow>

			<FormSubheader>
				<FontAwesomeIcon icon={faBrush} />
				Choose Colors:
			</FormSubheader>
			<Row>
				<FormColumn>
					<Label htmlFor="primaryColor">Accent</Label>
					<Input
						type="color"
						name="primaryColor"
						value={formData.primaryColor}
						onChange={onChange}
					/>
				</FormColumn>
				<FormColumn>
					<Label htmlFor="secondaryColor">Menu Text</Label>
					<Input
						type="color"
						name="secondaryColor"
						value={formData.secondaryColor}
						onChange={onChange}
					/>
				</FormColumn>
				<FormColumn>
					<Label htmlFor="tertiaryColor">Menu Background</Label>
					<Input
						type="color"
						name="tertiaryColor"
						value={formData.tertiaryColor}
						onChange={onChange}
					/>
				</FormColumn>
			</Row>

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

export default Branding;
