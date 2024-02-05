import { useState } from "react";

import { IAppError } from "../interfaces/api.interface";

const useStatus = () => {
	const [success, setSuccess] = useState("");
	const [error, setError] = useState<IAppError | undefined>(undefined);

	const handleClear = () => {
		setSuccess("");
		setError(undefined);
	};

	const handleSuccess = (successMessage: string) => {
		setSuccess(successMessage);
	};

	const handleError = (error: IAppError) => {
		setError(error);
	};

	const clearStatus = () => {
		setTimeout(handleClear, 3000);
	};

	return {
		success,
		error,
		handleSuccess,
		handleError,
		clearStatus,
	};
};

export default useStatus;