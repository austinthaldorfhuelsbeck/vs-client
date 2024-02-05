import { useEffect } from "react";
import { useGallery, useUser } from "../context/contextProvider";
import { IAppError } from "../interfaces/api.interface";
import { IGallery, IUser } from "../interfaces/models.interface";
import { fetchGallery } from "../middleware/gallery.api";
import { fetchSocial } from "../middleware/social.api";
import useStatus from "./useStatus";

const useStudio = () => {
	const { currentUser, setCurrentUser } = useUser();
	const { currentGallery, setCurrentGallery } = useGallery();

	const { error, handleError, clearStatus } = useStatus();

	const loadGallery = async (
		id: string,
		setCurrentGallery: (gallery: IGallery) => void,
	) => {
		try {
			const res = await fetchGallery(id);
			if (res.error) {
				handleError(res.error);
				clearStatus();
			}
			if (res.data) {
				setCurrentGallery(res.data);
			}
		} catch (error) {
			handleError(error as IAppError);
		}
	};

	const loadSocial = async (
		id: string,
		setCurrentUser: (user: any) => void,
	) => {
		try {
			const res = await fetchSocial(id);
			if (res.error) {
				handleError(res.error);
				clearStatus();
			}
			if (res.data) {
				setCurrentUser((prevUser: IUser) => ({
					...prevUser,
					social: res.data,
				}));
			}
		} catch (error) {
			handleError(error as IAppError);
		}
	};

	useEffect(() => {
		if (currentGallery?._id) {
			loadGallery(currentGallery._id, setCurrentGallery);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentGallery?._id]);

	useEffect(() => {
		if (currentUser?._id) {
			loadSocial(currentUser._id, setCurrentUser);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentUser?._id]);

	return {
		studioError: error,
	};
};

export default useStudio;
