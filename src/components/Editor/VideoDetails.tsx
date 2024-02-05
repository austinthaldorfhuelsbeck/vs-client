import {
	faCloudDownload,
	faFilm,
	faPlay,
	faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useVideo } from "../../context/contextProvider";
import useUploadReducer from "../../context/useUploadReducer";
import useUpload, { UploadConfig } from "../../hooks/useUpload";
import { IVideo } from "../../interfaces/models.interface";
import { updateVideo } from "../../middleware/video.api";
import { Alert, InlineButton } from "../../styles/common/common.style";
import { FormRow } from "../../styles/forms.style";
import {
	Controls,
	Desc,
	Header,
	Player,
	Progress,
	ProgressBackground,
	ProgressBar,
	ProgressContainer,
	Subheader,
	UploadButton,
} from "./Editor.style";

const VideoDetails: React.FC<{ currentVideo?: IVideo }> = () => {
	const { currentVideo } = useVideo();

	const { videoReducer } = useUploadReducer();
	const apiFunction = (data: Partial<IVideo>) => {
		const id = currentVideo?._id || "";
		return updateVideo(id, data);
	};

	const config: UploadConfig = {
		object: currentVideo,
		value: "video",
		reducerFunction: videoReducer,
		apiFunction,
	};
	const { onFileChange, percent, uploadError, uploadSuccess } =
		useUpload(config);

	if (!currentVideo) {
		// Handle the case where currentVideo is undefined
		return null;
	}

	const formatDate = (date: string): string => {
		return new Date(date).toLocaleDateString("en-us", {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		});
	};

	return (
		<>
			<FormRow>
				<Header>{currentVideo?.name}</Header>
				<Desc>
					<FontAwesomeIcon icon={faPlay} />
					{` ${currentVideo?.views} Views`}
				</Desc>
				<Desc>
					<FontAwesomeIcon icon={faCloudDownload} />
					{` ${currentVideo?.downloads} Downloads`}
				</Desc>
			</FormRow>

			<Subheader>{formatDate(currentVideo?.updatedAt || "")}</Subheader>

			<Player>
				<video src={currentVideo?.video} controls width={"100%"} />
			</Player>

			{percent > 0 && percent < 100 && (
				<ProgressContainer>
					<ProgressBar>
						<ProgressBackground />
						<Progress percent={Math.round(percent)} />
					</ProgressBar>
					{`Uploading... ${Math.round(percent)}%`}
				</ProgressContainer>
			)}
			{(percent === 0 || percent === 100) && (
				<Controls>
					<InlineButton>
						<FontAwesomeIcon icon={faShareAlt} /> Share & Embed
					</InlineButton>
					<UploadButton>
						<input
							id="video-replace-upload"
							type="file"
							accept="video/*"
							onChange={onFileChange}
						/>
						<label htmlFor="video-replace-upload">
							<FontAwesomeIcon icon={faFilm} />
							{" Replace Video"}
						</label>
					</UploadButton>
				</Controls>
			)}

			{uploadError && (
				<Alert $error={uploadError}>{uploadError.message}</Alert>
			)}
			{uploadSuccess && (
				<Alert $success={uploadSuccess}>{uploadSuccess}</Alert>
			)}
		</>
	);
};

export default VideoDetails;
