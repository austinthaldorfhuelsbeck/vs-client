import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useUser } from "../context/contextProvider";
import { IApiResponse } from "../interfaces/api.interface";
import { IUser } from "../interfaces/models.interface";
import { updateUser } from "../middleware/user.api";
import useStatus from "./useStatus";

const useUserForm = () => {
	// context for preview image, updating user, switching gallery
	const { currentUser, setCurrentUser } = useUser();

	// state for form data
	// defaults to user context
	const [formData, setFormData] = useState<Partial<IUser>>({
		...currentUser,
	});

	// error/ success status hook
	const { success, error, handleSuccess, handleError, clearStatus } =
		useStatus();

	// form handlers
	const onUserChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setFormData((prev) => {
			const { name, value } = e.target;
			return { ...prev, [name]: value };
		});
	};
	const onUserSubmit = async (e: FormEvent) => {
		e.preventDefault();
		// update user on db
		if (currentUser?._id) {
			const res: IApiResponse = await updateUser(
				currentUser._id,
				formData,
			);
			// update context or set error
			if (res.error) handleError(res.error);
			if (res.data) {
				handleSuccess("Successfully updated user");
				clearStatus();
				setCurrentUser(res.data);
			}
		}
	};

	// load user on switch
	useEffect(() => {
		if (currentUser) setFormData(currentUser);
	}, [currentUser]);

	return {
		formData,
		onUserChange,
		onUserSubmit,
		success,
		error,
	};
};

export default useUserForm;