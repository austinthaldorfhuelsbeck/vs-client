import {
	faEllipsis,
	faExternalLinkSquareAlt,
	faFolder,
	faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { IGallery } from "../../interfaces/models.interface";
import { Alert } from "../../styles/common/common.style";
import ContextMenu from "../ContextMenu";
import { ListItem } from "../ContextMenu/ContextMenu.style";
import DeleteGallery from "./DeleteGallery";
import GalleryEditDialog from "./GalleryEditDialog";
import { Icon, Label, Selector, SidebarLabel } from "./Sidebar.style";
import useSidebar from "./useSidebar";

interface SidebarItemProps {
	gallery: IGallery;
}

const GalleryLink: React.FC<{ galleryId: string }> = ({ galleryId }) => (
	<Link
		to={`/galleries/${galleryId}`}
		target="_blank"
		rel="noopener noreferrer"
	>
		<ListItem>
			<FontAwesomeIcon icon={faExternalLinkSquareAlt} />
			<Label>View Gallery</Label>
		</ListItem>
	</Link>
);

const CopyLinkItem: React.FC<{ onClick: () => void }> = ({ onClick }) => (
	<ListItem onClick={onClick}>
		<FontAwesomeIcon icon={faLink} />
		<Label>Copy link</Label>
	</ListItem>
);

const SidebarItem: React.FC<SidebarItemProps> = ({ gallery }) => {
	const { onClick, isSelected, onCopy, success } = useSidebar(gallery);

	return (
		<Selector onClick={onClick} aria-selected={isSelected}>
			<SidebarLabel>
				<FontAwesomeIcon icon={faFolder} />
				{" " + gallery.name}
			</SidebarLabel>
			<ContextMenu
				button={<Icon icon={faEllipsis} />}
				content={
					<>
						<GalleryEditDialog />
						<GalleryLink galleryId={gallery._id} />
						<CopyLinkItem onClick={onCopy} />
						{success && <Alert $success={success}>{success}</Alert>}
						<DeleteGallery gallery={gallery} />
					</>
				}
			/>
		</Selector>
	);
};

export default SidebarItem;
