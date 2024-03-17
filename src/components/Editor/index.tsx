import { faPhotoFilm, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import placeholderImg from "../../assets/img/placeholder-image.jpg";
import { useVideo } from "../../context/contextProvider";
import useUploadReducer from "../../context/useUploadReducer";
import useUpload, { UploadConfig } from "../../hooks/useUpload";
import useVideoForm from "../../hooks/useVideoForm";
import { IVideo } from "../../interfaces/models.interface";
import { updateVideo } from "../../middleware/video.api";
import { Alert, CloseButton } from "../../styles/common/common.style";
import { FormHeader, FormRow } from "../../styles/forms.style";
import TextInput from "../InputGroups/TextInput";
import {
  Button,
  Container,
  ContentWrapper,
  FormWrapper,
  Hr,
  Thumbnail,
  UploadButton,
} from "./Editor.style";
import VideoDetails from "./VideoDetails";

interface Props {
	toggle: (e: any) => void;
}
const Editor: React.FC<Props> = ({ toggle }) => {
	const { currentVideo } = useVideo();
	const { formData, onChange, onSubmit, success, error } = useVideoForm();

	const { videoReducer } = useUploadReducer();
	const apiFunction = (data: Partial<IVideo>) => {
		const id = currentVideo?._id || "";
		return updateVideo(id, data);
	};

	const config: UploadConfig = {
		object: currentVideo,
		value: "img",
		reducerFunction: videoReducer,
		apiFunction,
	};
	const { onFileChange, uploadError, uploadSuccess } = useUpload(config);

	return (
		<Container>
			<ContentWrapper>
				<VideoDetails />
			</ContentWrapper>
			<FormWrapper>
				<FormRow>
					<CloseButton onClick={toggle} icon={faX} />
				</FormRow>

				<form noValidate autoComplete="off" onSubmit={onSubmit}>
					<TextInput
						limited
						name="name"
						label="Video Title*"
						value={formData.name}
						onChange={onChange}
					/>
					<Button $primary type="submit">
						Save
					</Button>

					<Hr />
					<FormHeader>Thumbnail</FormHeader>
					<Thumbnail src={currentVideo?.img || placeholderImg} />
					<UploadButton>
						<input
							id="video-image-upload"
							type="file"
							accept="image/*"
							onChange={onFileChange}
						/>
						<label htmlFor="video-image-upload">
							<FontAwesomeIcon icon={faPhotoFilm} />
							{" Replace Thumbnail"}
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
			</FormWrapper>
		</Container>
	);
};

export default Editor;
