import React, { Dispatch, SetStateAction, useState } from "react";
import { StudioModal } from "../../../modals/studio-modal";
import { Gallery } from "src/models/gallery";
import { MoveGalleryToFolderForm } from "../forms/move-gallery-to-folder-form";

interface Props {
	gallery: Gallery | null;
  setGalleries: Dispatch<SetStateAction<Array<Gallery | null>>>;
	children: JSX.Element;
};

export const MoveGalleryToFolderModal: React.FC<Props> = ({
	gallery,
	setGalleries,
	children
}) => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	
	// handlers for gallery modal
	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);
	
	return gallery  && (
			<>
				<div onClick={openModal}>
					{children}
				</div>
				<StudioModal
					isOpen={modalIsOpen}
					closeModal={closeModal}
				>
					<MoveGalleryToFolderForm
						gallery={gallery}
						setGalleries={setGalleries}
						closeModal={closeModal}
					/>
				</StudioModal>
			</>
		);
	};