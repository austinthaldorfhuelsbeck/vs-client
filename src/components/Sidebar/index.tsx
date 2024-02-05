import { faFolderPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { SyntheticEvent } from "react";

import { useUserContext } from "../../context/contexts";
import useGalleryForm from "../../hooks/useGalleryForm";
import useModal from "../../hooks/useModal";
import { IGallery } from "../../interfaces/models.interface";
import {
	Alert,
	CloseButton,
	Dialog,
	InlineButton,
} from "../../styles/common/common.style";
import { Buttons, FormHeader, FormRow } from "../../styles/forms.style";
import TextInput from "../InputGroups/TextInput";
import { Button, Container, Wrapper } from "./Sidebar.style";
import SidebarItem from "./SidebarItem";
import useSidebar from "./useSidebar";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
	// Context
	const { currentUser } = useUserContext();

	// Custom hooks
	const { setCurrentGallery } = useSidebar();
	const { formData, onChange, onSubmit, success, error } = useGalleryForm();
	const { modalRef, toggle, onBackgroundClick } = useModal();

	// Handlers
	const onGalleryClick = (e: SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		// load company form
		setCurrentGallery(undefined);
		toggle(e);
	};

	const onCancel = (e: SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		toggle(e);
	};

	return (
		<Container>
			<Wrapper>
				<FormHeader>Galleries</FormHeader>
				<Button onClick={onGalleryClick}>
					<FontAwesomeIcon icon={faFolderPlus} /> New Gallery
				</Button>
			</Wrapper>

			{currentUser?.galleries && (
				<ul>
					{currentUser.galleries
						.filter((gallery) => gallery)
						.map((gallery: IGallery) => (
							<SidebarItem key={gallery._id} gallery={gallery} />
						))}
				</ul>
			)}

			<Dialog ref={modalRef} onClick={onBackgroundClick}>
				<FormRow>
					<FormHeader>Gallery Name</FormHeader>
					<CloseButton onClick={toggle} icon={faX} />
				</FormRow>
				<form noValidate autoComplete="off" onSubmit={onSubmit}>
					{error && <Alert $error={error}>{error.message}</Alert>}
					{success && <Alert $success={success}>{success}</Alert>}

					<TextInput
						limited
						name="name"
						label="Enter a Gallery Name*"
						value={formData.name}
						onChange={onChange}
					/>

					<hr />
					<Buttons>
						<InlineButton onClick={onCancel} $secondary>
							Cancel
						</InlineButton>
						<InlineButton type="submit" $primary>
							Save
						</InlineButton>
					</Buttons>
				</form>
			</Dialog>
		</Container>
	);
};

export default Sidebar;
