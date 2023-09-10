import React, { Dispatch, SetStateAction, useState } from "react";
import { StudioModal } from "../../../modals/studio-modal";
import { FolderForm } from "../../../forms/folder-form";
import { Folder } from "src/models/folder";

interface Props {
  company_id: number;
	folders: Array<Folder | null>;
  setFolders: Dispatch<SetStateAction<Array<Folder | null>>>;
	folder: Folder | null;
	children: JSX.Element;
};

export const FolderStudioModal: React.FC<Props> = ({
	company_id,
	folders,
	setFolders,
	folder,
	children
}) => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	// const [formData, setFormData] = useState<Folder | null>(null);
	
	// handlers for folder modal
	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);
	
	return (
			<>
				<div
					style={{ "display": "inline-grid" }}
					onClick={openModal}
				>
					{children}
				</div>
				<StudioModal
					isOpen={modalIsOpen}
					closeModal={closeModal}
				>
					<FolderForm
						company_id={company_id}
						closeModal={closeModal}
						folders={folders}
						setFolders={setFolders}
						folder={folder} />
				</StudioModal>
			</>
		);
	};