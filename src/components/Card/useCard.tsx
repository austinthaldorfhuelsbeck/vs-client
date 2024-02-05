import { FormEvent } from "react";
import { useGallery, useVideo } from "../../context/contextProvider";
import useStatus from "../../hooks/useStatus";
import { deleteVideo } from "../../middleware/video.api";

const useCard = () => {
	// Context
	const { currentGallery, setCurrentGallery } = useGallery();
	const { currentVideo, setCurrentVideo } = useVideo();

	// error/ success status hook
	const { success, error, handleSuccess, handleError, clearStatus } =
		useStatus();

	// Handlers
	const onDelete = (e: FormEvent) => {
		e.preventDefault();
		// function to delete a video
		const loadDelete = async (id: string) => {
			const res = await deleteVideo(id);
			// error handling and context
			if (res.error) {
				handleError(res.error);
			}
			if (res.data && currentGallery) {
				handleSuccess("Video deleted successfully");
				clearStatus();
				setCurrentVideo(undefined);
				const filteredVideos = currentGallery.videos.filter(
					(v) => v._id !== id,
				);
				setCurrentGallery({
					...currentGallery,
					videos: filteredVideos,
				});
			}
		};
		// call the async function on click if confirm
		if (currentVideo?._id) loadDelete(currentVideo._id);
	};

	return { onDelete, success, error };
};

export default useCard;
