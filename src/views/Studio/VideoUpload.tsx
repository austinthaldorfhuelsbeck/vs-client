import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
	Progress,
	ProgressBackground,
	ProgressBar,
	ProgressContainer,
	UploadButton,
} from "./Studio.style";

interface VideoUploadProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	percent: number;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onChange, percent }) => (
	<>
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
			<UploadButton>
				<input
					id="file-upload"
					type="file"
					accept="video/*"
					onChange={onChange}
				/>
				<label htmlFor="file-upload">
					<FontAwesomeIcon icon={faCloudUpload} />
					{" Upload Video"}
				</label>
			</UploadButton>
		)}
	</>
);

export default VideoUpload;
