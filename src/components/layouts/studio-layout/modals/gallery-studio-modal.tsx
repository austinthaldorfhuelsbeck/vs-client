import React, { Dispatch, SetStateAction, useState } from "react";
import { StudioModal } from "../../../modals/studio-modal";
import { GalleryForm } from "src/components/forms/gallery-form";
import { Gallery } from "src/models/gallery";

interface Props {
  folder_id: number;
  setGalleries: Dispatch<SetStateAction<Array<Gallery | null>>>;
	gallery: Gallery | null;
	children: JSX.Element;
};

export const GalleryStudioModal: React.FC<Props> = ({
	folder_id,
	setGalleries,
	gallery,
	children
}) => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	
	// handlers for gallery modal
	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);
	
	return (
			<>
				<div
					// style={{ "display": "inline-grid" }}
					onClick={openModal}
				>
					{children}
				</div>
				<StudioModal
					isOpen={modalIsOpen}
					closeModal={closeModal}
				>
					<GalleryForm
						folder_id={folder_id}
						closeModal={closeModal}
						setGalleries={setGalleries}
						gallery={gallery}
					/>
				</StudioModal>
			</>
		);
	};