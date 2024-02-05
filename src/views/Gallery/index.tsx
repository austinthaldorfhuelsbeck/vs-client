import { faPlayCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { GalleryNav } from "../../components/GalleryNav";
import useModal from "../../hooks/useModal";
import { IGallery, IUser, IVideo } from "../../interfaces/models.interface";
import { fetchGallery } from "../../middleware/gallery.api";
import { fetchUser } from "../../middleware/user.api";
import { addView, listVideos } from "../../middleware/video.api";
import { Dialog } from "../../styles/common/common.style";
import {
	Container,
	Header,
	Loader,
	PlayButton,
	Wrapper,
} from "./Gallery.style";
import { VideoCard } from "./VideoCard";

const Gallery: React.FC = () => {
	const { id } = useParams();
	const [gallery, setGallery] = useState<IGallery | undefined>();
	const [user, setUser] = useState<IUser | undefined>();
	const [videos, setVideos] = useState<IVideo[]>([]);

	const { modalRef, toggle, onBackgroundClick } = useModal();

	useEffect(() => {
		const loadGalleryData = async (id: string) => {
			const galleryResponse = await fetchGallery(id);
			if (galleryResponse.data) {
				setGallery(galleryResponse.data);
				const userResponse = await fetchUser(
					galleryResponse.data.userId,
				);
				if (userResponse.data) setUser(userResponse.data);
			}
		};
		if (id) loadGalleryData(id);
	}, [id]);

	// load list of videos in gallery
	useEffect(() => {
		const loadVideos = async (id: string) => {
			const res = await listVideos(id);
			if (res.data) {
				// Filter out undefined videos
				const filteredVideos = res.data.filter(
					(video: IVideo) => !!video,
				);
				setVideos(filteredVideos);
			}
		};
		if (id) loadVideos(id);
	}, [id]);

	return gallery && user ? (
		<>
			<Container
				$bg={gallery.img}
				$primaryFont={user.primaryFont}
				$secondaryFont={user.secondaryFont}
				$hex1={user.primaryColor}
				$hex2={user.secondaryColor}
				$hex3={user.tertiaryColor}
			>
				<GalleryNav user={user} gallery={gallery} />
				<Header>{gallery.name}</Header>
				{videos[0]?.video && (
					<>
						<PlayButton onClick={toggle}>
							<FontAwesomeIcon icon={faPlayCircle} /> Play
						</PlayButton>
					</>
				)}

				<Wrapper>
					{videos.map(
						(video: IVideo | undefined) =>
							video &&
							video.displayed && (
								<VideoCard key={video._id} video={video} />
							),
					)}
				</Wrapper>
			</Container>

			<Dialog ref={modalRef} onClick={onBackgroundClick}>
				<ReactPlayer
					controls
					playing
					onPlay={() => id && addView(videos[0]._id)}
					width={"100%"}
					height={"100%"}
					url={videos[0].video}
				/>
			</Dialog>
		</>
	) : (
		<Loader icon={faSpinner} />
	);
};

export default Gallery;
