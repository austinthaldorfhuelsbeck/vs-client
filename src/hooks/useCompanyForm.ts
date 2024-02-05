import {
	ChangeEvent,
	FormEvent,
	useCallback,
	useEffect,
	useState,
} from "react";
import { useUser } from "../context/contextProvider";
import { IApiResponse } from "../interfaces/api.interface";
import { ISocial, IUser } from "../interfaces/models.interface";
import {
	createSocial,
	fetchSocial,
	updateSocial,
} from "../middleware/social.api";
import { updateUser } from "../middleware/user.api";
import useStatus from "./useStatus";

const useCompanyForm = () => {
	const { currentUser, setCurrentUser } = useUser();
	const { success, error, handleSuccess, handleError, clearStatus } =
		useStatus();

	const [formData, setFormData] = useState<Partial<IUser>>({
		...currentUser,
	});
	const [socialFormData, setSocialFormData] = useState<Partial<ISocial>>({});

	const onChange = ({
		target,
	}: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const onSocialChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setSocialFormData((prev) => ({ ...prev, [name]: value }));
	};

	const onDrop = useCallback((files: File[]) => {
		if (files[0]) {
			setFormData((prev) => ({ ...prev, img: files[0].name }));
		}
	}, []);

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (currentUser?._id) {
			const userRes: IApiResponse = await updateUser(
				currentUser._id,
				formData,
			);
			if (userRes.error) handleError(userRes.error);
			if (userRes.data) setCurrentUser(userRes.data);
		}

		if (socialFormData._id) {
			const socialRes: IApiResponse = await updateSocial(
				socialFormData._id,
				socialFormData,
			);
			if (socialRes.data) {
				handleSuccess("Successfully updated");
				clearStatus();
			}
			if (socialRes.error) {
				handleError(socialRes.error);
				clearStatus();
			}
		}
	};

	useEffect(() => {
		const load = async (id: string) => {
			const socialRes: IApiResponse = await fetchSocial(id);
			if (socialRes.data) {
				setSocialFormData(socialRes.data);
			} else {
				const createSocialRes: IApiResponse = await createSocial({
					userId: id,
				});
				if (createSocialRes.error) handleError(createSocialRes.error);
			}
		};

		if (currentUser?._id) {
			setFormData(currentUser);
			load(currentUser._id);
		}
		// should only happen when the user changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentUser]);

	return {
		formData,
		setFormData,
		socialFormData,
		onChange,
		onSocialChange,
		onDrop,
		onSubmit,
		success,
		error,
	};
};

export default useCompanyForm;
