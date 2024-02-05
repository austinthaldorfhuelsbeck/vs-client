import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import userPlaceholderImg from "../../assets/img/user-placeholder-image.jpg";
import { useUser } from "../../context/contextProvider";
import useUploadReducer from "../../context/useUploadReducer";
import useCompanyForm from "../../hooks/useCompanyForm";
import useUpload, { UploadConfig } from "../../hooks/useUpload";
import { IUser } from "../../interfaces/models.interface";
import { updateUser } from "../../middleware/user.api";
import { Alert, InlineButton } from "../../styles/common/common.style";
import { Buttons, FormHeader, FormSubheader } from "../../styles/forms.style";
import TextInput from "../InputGroups/TextInput";
import { Form, Row, Thumbnail, UploadButton } from "./CompanyForms.style";

const Details: React.FC = () => {
	const { currentUser } = useUser();
	const { formData, onChange, onSubmit, success, error } = useCompanyForm();
	const { userReducer } = useUploadReducer();
	const apiFunction = (data: Partial<IUser>) => {
		const id = currentUser?._id || "";
		return updateUser(id, data);
	};
	const config: UploadConfig = {
		object: currentUser,
		value: "companyImg",
		reducerFunction: userReducer,
		apiFunction,
	};
	const { onFileChange, uploadError, uploadSuccess } = useUpload(config);

	return (
		<>
			<FormHeader>Edit Company Details</FormHeader>
			<FormSubheader>Save to preview your changes.</FormSubheader>

			<Form noValidate autoComplete="off" onSubmit={onSubmit}>
				<Row>
					<TextInput
						limited
						name="companyName"
						label="Company Name*"
						value={formData.companyName}
						onChange={onChange}
					/>
					<Thumbnail
						src={currentUser?.companyImg || userPlaceholderImg}
					/>
				</Row>
				<Buttons>
					<UploadButton>
						<input
							id="company-image-upload"
							type="file"
							accept="image/*"
							onChange={onFileChange}
						/>
						<label htmlFor="company-image-upload">
							<FontAwesomeIcon icon={faPhotoFilm} />
							{formData.img ? " Replace Logo" : " Upload Logo"}
						</label>

						{uploadError && (
							<Alert $error={uploadError}>
								{uploadError.message}
							</Alert>
						)}
						{uploadSuccess && (
							<Alert $success={uploadSuccess}>
								{uploadSuccess}
							</Alert>
						)}
					</UploadButton>
					<InlineButton type="submit" $primary>
						Save
					</InlineButton>
				</Buttons>
			</Form>

			{error && <Alert $error={error}>{error.message}</Alert>}
			{success && <Alert $success={success}>{success}</Alert>}
		</>
	);
};

export default Details;
