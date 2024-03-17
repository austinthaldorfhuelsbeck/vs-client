import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { useGallery, useUser } from "../context/contextProvider";
import { IApiResponse } from "../interfaces/api.interface";
import { IGallery } from "../interfaces/models.interface";
import { createGallery, updateGallery } from "../middleware/gallery.api";
import useStatus from "./useStatus";

const useGalleryForm = () => {
	// context
	const { currentUser, setCurrentUser } = useUser();
	const { currentGallery, setCurrentGallery } = useGallery();

	// error/ success status hook
	const { success, error, handleSuccess, handleError, clearStatus } =
		useStatus();

	// state for form data
	const [formData, setFormData] = useState<Partial<IGallery>>({
		...currentGallery,
	});
	// state for api errors

	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData((prev) => {
			const { name, value } = e.target;
			return { ...prev, [name]: value };
		});
	};
	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		// update gallery on db
		if (currentGallery?._id) {
			const res: IApiResponse = await updateGallery(
				currentGallery._id,
				formData,
			);
			// update context and set alert
			if (res.error) handleError(res.error);
			if (res.data) {
				handleSuccess("Gallery updated successfully");
				clearStatus();
				setCurrentGallery(res.data);
			}
		} else {
			// create gallery on db
			const res: IApiResponse = await createGallery({
        ...formData,
        userId: currentUser?._id,
      });
			// update context and set alert
			if (res.error) handleError(res.error);
			if (res.data && currentUser?.galleries) {
				handleSuccess("Gallery created successfully");
				clearStatus();
				setCurrentUser({
					...currentUser,
					galleries: [...currentUser.galleries, res.data],
				});
				setCurrentGallery(res.data);
			}
		}
	};

	// load gallery on switch
	useEffect(() => {
		if (currentGallery) {
			if (formData._id !== currentGallery?._id)
				setFormData(currentGallery);
		} else {
			setFormData({ name: "", img: "" });
		}
	}, [currentGallery, formData._id, setFormData]);

	return {
		formData,
		onChange,
		onSubmit,
		success,
		error,
	};
};

export default useGalleryForm;