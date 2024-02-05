import React from "react";
import placeholderImg from "../../assets/img/placeholder-image.jpg";
import Sidebar from "../../components/Sidebar";
import { useGallery } from "../../context/contextProvider";
import useUploadReducer from "../../context/useUploadReducer";
import useStudio from "../../hooks/useStudio";
import useUpload, { UploadConfig } from "../../hooks/useUpload";
import { IVideo } from "../../interfaces/models.interface";
import { postVideo } from "../../middleware/video.api";
import { Alert } from "../../styles/common/common.style";
import { FormHeader } from "../../styles/forms.style";
import CompanyDetails from "./CompanyDetails";
import { Container, Hr, Row, Wrapper } from "./Studio.style";
import VideoList from "./VideoList";
import VideoUpload from "./VideoUpload";

const Studio: React.FC = () => {
	const { currentGallery } = useGallery();

	const { studioError } = useStudio();

	const { videoCreateReducer } = useUploadReducer();
	const apiFunction = (data: Partial<IVideo>) => postVideo(data);
	const config: UploadConfig = {
		object: {
			name: "Untitled",
			galleryId: currentGallery?._id || "",
			img: placeholderImg,
		},
		value: "video",
		reducerFunction: videoCreateReducer,
		apiFunction,
	};

	const { onFileChange, percent, uploadSuccess, uploadError } =
		useUpload(config);

	return (
		<Container>
			<Sidebar />
			<Wrapper>
				{currentGallery ? (
					<>
						<Row>
							<FormHeader>Videos</FormHeader>
							<VideoUpload
								onChange={onFileChange}
								percent={percent}
							/>
						</Row>
						<Hr />
						{(uploadError || studioError || uploadSuccess) && (
							<Alert
								$error={uploadError || studioError}
								$success={uploadSuccess}
							>
								{(uploadError || studioError)?.message ||
									uploadSuccess}
							</Alert>
						)}
						{currentGallery?.videos && (
							<VideoList videos={currentGallery.videos} />
						)}
					</>
				) : (
					<CompanyDetails />
				)}
			</Wrapper>
		</Container>
	);
};

export default Studio;
