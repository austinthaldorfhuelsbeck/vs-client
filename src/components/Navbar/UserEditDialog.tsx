import { faPhotoFilm, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userPlaceholderImg from "../../assets/img/user-placeholder-image.jpg";
import { useUser } from "../../context/contextProvider";
import useUploadReducer from "../../context/useUploadReducer";
import useUpload, { UploadConfig } from "../../hooks/useUpload";
import useUserForm from "../../hooks/useUserForm";
import { IUser } from "../../interfaces/models.interface";
import { updateUser } from "../../middleware/user.api";
import {
	Alert,
	CloseButton,
	Dialog,
	InlineButton,
} from "../../styles/common/common.style";
import { Buttons, FormHeader, FormRow } from "../../styles/forms.style";
import TextInput from "../InputGroups/TextInput";
import { Form, Thumbnail, UploadButton } from "./Navbar.style";

interface Props {
	userModal: any; // Replace 'any' with the actual modal type
}

const UserEditDialog: React.FC<Props> = ({ userModal }) => {
	const { currentUser } = useUser();
	const { formData, onUserSubmit, onUserChange, error, success } =
		useUserForm();
	const { userReducer } = useUploadReducer();

	const apiFunction = (data: Partial<IUser>) => {
		const id = currentUser?._id || "";
		return updateUser(id, data);
	};
	const config: UploadConfig = {
		object: currentUser,
		value: "img",
		reducerFunction: userReducer,
		apiFunction,
	};
	const { onFileChange, uploadError, uploadSuccess } = useUpload(config);

	return (
		<Dialog ref={userModal.modalRef} onClick={userModal.onBackgroundClick}>
			<FormRow>
				<FormHeader>Edit User Details</FormHeader>
				<CloseButton onClick={userModal.toggle} icon={faX} />
			</FormRow>
			<Form noValidate autoComplete="off" onSubmit={onUserSubmit}>
				<TextInput
					limited
					name="name"
					label="Name*"
					value={formData.name}
					onChange={onUserChange}
				/>
				<Buttons>
					<InlineButton type="submit" $primary>
						Save
					</InlineButton>
				</Buttons>

				<hr />
				<FormHeader>Profile Picture</FormHeader>
				<Thumbnail src={currentUser?.img || userPlaceholderImg} />
				<UploadButton>
					<input
						id="user-image-upload"
						type="file"
						accept="image/*"
						onChange={onFileChange}
					/>
					<label htmlFor="user-image-upload">
						<FontAwesomeIcon icon={faPhotoFilm} />
						{formData.img
							? " Replace Profile Picture"
							: " Upload Profile Picture"}
					</label>

					{uploadError && (
						<Alert $error={uploadError}>
							{uploadError.message}
						</Alert>
					)}
					{uploadSuccess && (
						<Alert $success={uploadSuccess}>{uploadSuccess}</Alert>
					)}
				</UploadButton>
			</Form>
			{error && <Alert $error={error}>{error.message}</Alert>}
			{success && <Alert $success={success}>{success}</Alert>}
		</Dialog>
	);
};

export default UserEditDialog;
