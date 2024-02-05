import { IGallery, IUser, IVideo } from "../interfaces/models.interface";
import { useGallery, useUser, useVideo } from "./contextProvider";

const useUploadReducer = () => {
	const { currentUser, setCurrentUser } = useUser();
	const { currentGallery, setCurrentGallery } = useGallery();
	const { currentVideo, setCurrentVideo } = useVideo();

	const userReducer = (data: Partial<IUser>) => {
		if (currentUser) setCurrentUser({ ...currentUser, ...data });
	};

	const galleryReducer = (data: Partial<IGallery>) => {
		if (currentGallery) {
			setCurrentGallery({ ...currentGallery, ...data });

			// Update currentUser if it exists and has galleries
			if (currentUser && currentUser.galleries) {
				setCurrentUser((prevUser) => {
					if (prevUser) {
						const updatedGalleries = prevUser.galleries.map(
							(gallery) =>
								gallery._id === currentGallery._id
									? { ...gallery, ...data }
									: gallery,
						);

						return {
							...prevUser,
							galleries: updatedGalleries,
						};
					}
					return prevUser;
				});
			}
		}
	};

	const videoReducer = (data: Partial<IVideo>) => {
		if (currentVideo) {
			setCurrentVideo({ ...currentVideo, ...data });

			// Update currentGallery if it exists and has videos
			if (currentGallery && currentGallery.videos) {
				setCurrentGallery((prevGallery) => {
					if (prevGallery) {
						const updatedVideos = prevGallery.videos.map((video) =>
							video._id === currentVideo._id
								? { ...video, ...data }
								: video,
						);

						return {
							...prevGallery,
							videos: updatedVideos,
						};
					}
					return prevGallery;
				});
			}
		}
	};

	const videoCreateReducer = (data: Partial<IVideo>) => {
		setCurrentVideo((prevVideo) =>
			prevVideo ? { ...prevVideo, ...data } : (data as IVideo),
		);

		if (currentGallery) {
			setCurrentGallery((prevGallery) =>
				prevGallery
					? {
							...prevGallery,
							videos: [...prevGallery.videos, data as IVideo],
					  }
					: undefined,
			);
		}
	};

	return { userReducer, galleryReducer, videoReducer, videoCreateReducer };
};

export default useUploadReducer;
