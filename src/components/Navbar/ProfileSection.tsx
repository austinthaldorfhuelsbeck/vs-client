import { faPencil, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyntheticEvent } from "react";
import userPlaceholderImg from "../../assets/img/user-placeholder-image.jpg";
import { useGallery, useUser } from "../../context/contextProvider";
import ContextMenu from "../ContextMenu";
import { Label, ListItem } from "../ContextMenu/ContextMenu.style";
import { ProfileImg } from "./Navbar.style";

interface Props {
	toggleModal: (e: SyntheticEvent<HTMLOrSVGElement>) => void;
	onLogout: () => void;
}

const ProfileSection: React.FC<Props> = ({ toggleModal, onLogout }) => {
	const { currentUser } = useUser();
	const { setCurrentGallery } = useGallery();

	const onUserEdit = (e: SyntheticEvent<HTMLLIElement>) => {
		toggleModal(e);
		setCurrentGallery(undefined);
	};

	return (
		<>
			<ContextMenu
				button={
					<ProfileImg src={currentUser?.img || userPlaceholderImg} />
				}
				content={
					<>
						<ListItem onClick={onUserEdit}>
							<FontAwesomeIcon icon={faPencil} />
							<Label>{currentUser?.name}</Label>
						</ListItem>
						<ListItem $danger onClick={onLogout}>
							<FontAwesomeIcon icon={faSignOut} />
							<Label>Log Out</Label>
						</ListItem>
					</>
				}
			/>
		</>
	);
};

export default ProfileSection;
