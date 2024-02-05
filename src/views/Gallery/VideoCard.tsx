import React from "react";

import ReactPlayer from "react-player";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useModal from "../../hooks/useModal";
import { IVideo } from "../../interfaces/models.interface";
import { addView } from "../../middleware/video.api";
import { Dialog } from "../../styles/common/common.style";
import { AltHeader, PlayIcon, Subheader, Video } from "./Gallery.style";

interface Props {
	video: IVideo;
}

export const VideoCard: React.FC<Props> = ({ video }) => {
	const { modalRef, toggle, onBackgroundClick } = useModal();

	return (
		<>
			<Video onClick={toggle} url={video.img}>
				<>
					<PlayIcon>
						<FontAwesomeIcon icon={faPlay} />
					</PlayIcon>
					<AltHeader>{video.name}</AltHeader>
					<Subheader>
						<FontAwesomeIcon icon={faPlay} /> Play film
					</Subheader>
				</>
			</Video>

			<Dialog ref={modalRef} onClick={onBackgroundClick}>
				<ReactPlayer
					controls
					playing
					onPlay={() => addView(video._id)}
					width={"100%"}
					height={"100%"}
					url={video.video}
				/>
			</Dialog>
		</>
	);
};
