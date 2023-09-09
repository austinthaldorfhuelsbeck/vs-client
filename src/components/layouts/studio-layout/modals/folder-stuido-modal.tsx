import React, { Dispatch, SetStateAction, useState } from "react";
import { InlineButton } from "../../../buttons/inline-button";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { StudioModal } from "../../../modals/studio-modal";
import { FolderForm } from "../../../forms/folder-form";
import { Company } from "src/models/company";
import { Folder } from "src/models/folder";

interface Props {
  selectedCompany: Company;
	folders: Array<Folder | null>;
  setFolders: Dispatch<SetStateAction<Array<Folder | null>>>;
};

export const FolderStudioModal: React.FC<Props> = ({
	selectedCompany,
	folders,
	setFolders
}) => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	// const [formData, setFormData] = useState<Folder | null>(null);
	
	// handlers for folder modal
	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);
	
	return (
		<>
			<InlineButton
				onClick={openModal}
				icon={faFolderPlus}
				title="New Folder" />
			<StudioModal
				isOpen={modalIsOpen}
				closeModal={closeModal}
			>
				<FolderForm
					company_id={selectedCompany.company_id}
					closeModal={closeModal}
					folders={folders}
					setFolders={setFolders}
					folder={null} />
			</StudioModal>
		</>
	);
	};