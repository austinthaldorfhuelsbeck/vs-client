import { faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useModal from "../../hooks/useModal";
import { IGallery } from "../../interfaces/models.interface";
import {
	Alert,
	CloseButton,
	Dialog,
	InlineButton,
} from "../../styles/common/common.style";
import { FormHeader, FormRow, FormSubheader } from "../../styles/forms.style";
import { Label, ListItem } from "../ContextMenu/ContextMenu.style";
import useSidebar from "./useSidebar";

interface Props {
	gallery: IGallery;
}

const DeleteGallery: React.FC<Props> = ({ gallery }) => {
	// Form hook
	const { onDelete, error } = useSidebar(gallery);
	// Modal hook
	const { toggle, modalRef, onBackgroundClick } = useModal();

	return (
		<>
			<ListItem onClick={toggle} $danger>
				<FontAwesomeIcon icon={faTrash} />
				<Label>Delete Gallery</Label>
			</ListItem>
			<Dialog ref={modalRef} onClick={onBackgroundClick}>
				<FormRow>
					<FormHeader>Are you sure?</FormHeader>
					<CloseButton onClick={toggle} icon={faX} />
				</FormRow>
				<form noValidate autoComplete="off" onSubmit={onDelete}>
					<FormSubheader>
						Deleting is permanent. You will not be able to recover
						this gallery.
					</FormSubheader>
					<InlineButton type="submit">
						I understand this action is permanent.
					</InlineButton>
				</form>
				{error && <Alert $error={error} />}
			</Dialog>
		</>
	);
};

export default DeleteGallery;
