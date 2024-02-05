import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useVideo } from "../context/contextProvider";
import { IApiResponse } from "../interfaces/api.interface";
import { IVideo } from "../interfaces/models.interface";
import { updateVideo } from "../middleware/video.api";
import useStatus from "./useStatus";

const useVideoForm = () => {
	// Context
	const { currentVideo, setCurrentVideo } = useVideo();

	// error/ success status hook
	const { success, error, handleSuccess, handleError, clearStatus } =
		useStatus();

	// state for form data
	// defaults to video context
	const [formData, setFormData] = useState<Partial<IVideo>>({});

	// Handlers
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => {
			const { name, value } = e.target;
			return { ...prev, [name]: value };
		});
	};
	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		// update video on db
		if (currentVideo) {
			const res: IApiResponse = await updateVideo(
				currentVideo._id,
				formData,
			);
			// update context or set error
			if (res.error) handleError(res.error);
			if (res.data) {
				handleSuccess("Video updated successfully");
				clearStatus();
				setCurrentVideo(res.data);
			}
		}
	};

	useEffect(() => {
		if (currentVideo) setFormData(currentVideo);
	}, [currentVideo]);

	return {
		formData,
		onChange,
		onSubmit,
		success,
		error,
	};
};

export default useVideoForm;
