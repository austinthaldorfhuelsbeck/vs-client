import {
  faEllipsis,
  faExpandAlt,
  faPencil,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { SyntheticEvent } from "react";
import placeholderImg from "../../assets/img/placeholder-image.jpg";
import { useVideo } from "../../context/contextProvider";
import useModal from "../../hooks/useModal";
import { IVideo } from "../../interfaces/models.interface";
import {
  Alert,
  CloseButton,
  Dialog,
  InlineButton,
} from "../../styles/common/common.style";
import { FormHeader, FormRow, FormSubheader } from "../../styles/forms.style";
import ContextMenu from "../ContextMenu";
import { Label, ListItem } from "../ContextMenu/ContextMenu.style";
import Editor from "../Editor";
import { Container, Desc, Ellipsis, Header, Icon, Img } from "./Card.style";
import useCard from "./useCard";

interface Props {
	video: IVideo;
}

const Card: React.FC<Props> = ({ video }) => {
	// context
	const { setCurrentVideo } = useVideo();

	// hooks
	const editModal = useModal();
	const deleteModal = useModal();
	const { onDelete, success, error } = useCard();

	// handlers for switching video context on click
	const onEditClick = (e: SyntheticEvent<HTMLDivElement | HTMLLIElement>) => {
		editModal.toggle(e);
		setCurrentVideo(video);
	};
	const onDeleteClick = (e: SyntheticEvent<HTMLLIElement>) => {
		deleteModal.toggle(e);
		setCurrentVideo(video);
	};

	// includes modal dialogues for editing and deleting video
	return (
		<Container>
			<Img src={video.img || placeholderImg} onClick={onEditClick}>
				<Icon icon={faExpandAlt} />
			</Img>

			<Desc>
				<Header>{video.name}</Header>

				<ContextMenu
					button={<Ellipsis icon={faEllipsis} />}
					content={
						<>
							<ListItem onClick={onEditClick}>
								<FontAwesomeIcon icon={faPencil} />
								<Label>Edit Details</Label>
							</ListItem>
							<ListItem onClick={onDeleteClick} $danger>
								<FontAwesomeIcon icon={faTrash} />
								<Label>Delete Video</Label>
							</ListItem>
						</>
					}
				/>
			</Desc>

			<Dialog
				ref={editModal.modalRef}
				onClick={editModal.onBackgroundClick}
			>
				<Editor toggle={editModal.toggle} />
			</Dialog>

			<Dialog
				ref={deleteModal.modalRef}
				onClick={deleteModal.onBackgroundClick}
			>
				<FormRow>
					<FormHeader>Are you sure?</FormHeader>
					<CloseButton onClick={deleteModal.toggle} icon={faX} />
				</FormRow>
				<form noValidate autoComplete="off" onSubmit={onDelete}>
					<FormSubheader>
						Deleting is permanent. You will not be able to recover
						this video.
					</FormSubheader>
					<InlineButton type="submit">
						I understand this action is permanent.
					</InlineButton>
				</form>

				{error && <Alert $error={error}>{error.message}</Alert>}
				{success && <Alert $success={success}>{success}</Alert>}
			</Dialog>
		</Container>
	);
};

export default Card;
