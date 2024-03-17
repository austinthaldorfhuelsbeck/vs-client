import { faPencil, faPhotoFilm, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import placeholderImg from "../../assets/img/placeholder-image.jpg";
import { useGallery } from "../../context/contextProvider";
import useUploadReducer from "../../context/useUploadReducer";
import useGalleryForm from "../../hooks/useGalleryForm";
import useModal from "../../hooks/useModal";
import useUpload, { UploadConfig } from "../../hooks/useUpload";
import { IGallery } from "../../interfaces/models.interface";
import { updateGallery } from "../../middleware/gallery.api";
import {
  Alert,
  CloseButton,
  Dialog,
  InlineButton,
} from "../../styles/common/common.style";
import { Buttons, FormHeader, FormRow } from "../../styles/forms.style";
import { Label, ListItem } from "../ContextMenu/ContextMenu.style";
import TextInput from "../InputGroups/TextInput";
import { Thumbnail, UploadButton } from "./Sidebar.style";

const GalleryEditDialog: React.FC = () => {
	const { currentGallery } = useGallery();
	const { formData, onChange, onSubmit, success, error } = useGalleryForm();
	const { toggle, modalRef, onBackgroundClick } = useModal();

	const { galleryReducer } = useUploadReducer();
	const apiFunction = (data: Partial<IGallery>) => {
		const id = currentGallery?._id || "";
		return updateGallery(id, data);
	};
	const config: UploadConfig = {
		object: currentGallery,
		value: "img",
		reducerFunction: galleryReducer,
		apiFunction,
	};
	const { onFileChange, uploadError, uploadSuccess } = useUpload(config);

	return (
		<>
			<ListItem onClick={toggle}>
				<FontAwesomeIcon icon={faPencil} />
				<Label>Edit Gallery</Label>
			</ListItem>

			<Dialog ref={modalRef} onClick={onBackgroundClick}>
				<FormRow>
					<FormHeader>Edit Gallery</FormHeader>
					<CloseButton onClick={toggle} icon={faX} />
				</FormRow>
				<form noValidate autoComplete="off" onSubmit={onSubmit}>
					<TextInput
						limited
						name="name"
						label="Enter a Gallery Name*"
						value={formData.name}
						onChange={onChange}
					/>
					<Buttons>
						<InlineButton type="submit" $primary>
							Save
						</InlineButton>
					</Buttons>

					<hr />
					<FormHeader>Thumbnail</FormHeader>
					<Thumbnail src={currentGallery?.img || placeholderImg} />
					<UploadButton>
						<input
							id="gallery-image-upload"
							type="file"
							accept="image/*"
							onChange={onFileChange}
						/>
						<label htmlFor="gallery-image-upload">
							<FontAwesomeIcon icon={faPhotoFilm} />
							{formData.img
								? " Replace Thumbnail"
								: " Upload Thumbnail"}
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
				</form>

				{error && <Alert $error={error}>{error.message}</Alert>}
				{success && <Alert $success={success}>{success}</Alert>}
			</Dialog>
		</>
	);
};

export default GalleryEditDialog;
