import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, MouseEvent, SetStateAction } from "react";

interface Props {
	setFormData: Dispatch<SetStateAction<any>>;
	initialFormData: any;
	closeModal: () => void;
};

export const CancelButton: React.FC<Props> = ({
	setFormData,
	initialFormData,
	closeModal
}) => {
	// handler wipes the form, closes the modal dialogue
	const onCancel = (e: MouseEvent) => {
		e.preventDefault();
		setFormData(initialFormData);
		closeModal();
	};

	return (
		<div onClick={onCancel} className="form-content__cancel-button">
			<FontAwesomeIcon icon={faXmark} />
		</div>
	);
};