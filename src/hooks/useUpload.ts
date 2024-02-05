// useVideoUpload.ts
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from "@firebase/storage";
import { ChangeEvent, useEffect, useState } from "react";
import firebaseApp from "../firebase";
import { IApiResponse } from "../interfaces/api.interface";
import { IGallery, IUser, IVideo } from "../interfaces/models.interface";
import useStatus from "./useStatus";

export interface UploadConfig {
	object?: Partial<IUser> | Partial<IGallery> | Partial<IVideo>;
	value: string;
	reducerFunction: (
		data: Partial<IUser> | Partial<IGallery> | Partial<IVideo>,
	) => void;
	apiFunction: (
		data: Partial<IUser> | Partial<IGallery> | Partial<IVideo>,
	) => Promise<IApiResponse>;
}

const useUpload = ({
	object,
	value,
	reducerFunction,
	apiFunction,
}: UploadConfig) => {
	const { success, error, handleSuccess, handleError, clearStatus } =
		useStatus();

	const [file, setFile] = useState<File | undefined>();
	const [percent, setPercent] = useState(0);

	const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) setFile(e.target.files[0]);
	};

	const load = async (
		data: Partial<IUser> | Partial<IGallery> | Partial<IVideo>,
	) => {
		const res = await apiFunction(data);
		if (res.data) {
			reducerFunction(res.data);
			handleSuccess(
				value === "video"
					? "Video uploaded successfully"
					: "Image uploaded successfully",
			);
			clearStatus();
		}
		if (res.error) handleError(res.error);
	};

	useEffect(() => {
		const uploadFile = (file: File) => {
			const storage = getStorage(firebaseApp);
			const fileName = new Date().valueOf() + file.name;
			const storageRef = ref(storage, fileName);
			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					setPercent(progress);
					console.log(progress, "%");
				},
				(error) => {
					console.error(error);
					handleError(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(
						(downloadUrl) => {
							load({
								...object,
								[value]: downloadUrl,
							});
						},
					);
				},
			);
		};
		if (file) uploadFile(file);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [file]);

	return {
		onFileChange,
		percent,
		uploadSuccess: success,
		uploadError: error,
	};
};

export default useUpload;
