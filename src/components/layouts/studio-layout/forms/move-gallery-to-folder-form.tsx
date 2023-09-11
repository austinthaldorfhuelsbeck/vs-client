import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CancelButton } from "src/components/buttons/forms/cancel-button";
import { InputGroup } from "src/components/forms/input-group";
import { Gallery } from "src/models/gallery";
import { SearchData } from "src/models/search-data";
import { FoldersSearchSelector } from "../selectors/folders-search-selector";
import { SubmitButton } from "src/components/buttons/forms/submit-button";
import { useAuth0 } from "@auth0/auth0-react";
import { Folder } from "src/models/folder";
import { ApiResponse } from "src/models/api-response";
import { getFolder } from "src/services/folders.service";
import { getGalleriesByFolderID, updateGallery } from "src/services/galleries.service";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

interface Props {
	gallery: Gallery;
	setGalleries: Dispatch<SetStateAction<Array<Gallery | null>>>;
	closeModal: () => void;
};

export const MoveGalleryToFolderForm: React.FC<Props> = ({
	gallery,
	setGalleries,
	closeModal
}) => {
	//Auth0
	const { getAccessTokenSilently } = useAuth0();
	
	// form states
	const [searchData, setSearchData] = useState<SearchData>({ data: "" });
	const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);

	// load selected folder from gallery
	useEffect(() => {
		const getFolderResponse = async (id: number) => {
			const audienceURL = process.env.REACT_APP_AUTH0_AUDIENCE;

			try {
				const accessToken = await getAccessTokenSilently({
					authorizationParams: {
						audience: audienceURL,
						scope: "read:current_user"
					}
				});

				const folderResponse: ApiResponse = await getFolder(accessToken, id);
				setSelectedFolder(folderResponse.data);
			} catch (error: any) {
				console.log(error);
			};
		};

		getFolderResponse(gallery.folder_id);
	}, [gallery.folder_id, getAccessTokenSilently]);

	// change handlers
	const onSearchChange = (e: any) => {
		setSearchData({ data: e.target.value	});
	};

	// return form
	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className="form-content__form-container"
		>
			<CancelButton
				setFormData={setSearchData}
				initialFormData={""}
				closeModal={closeModal}
			/>
			<InputGroup
				type="text"
				name="folder_name"
				title="Search Folders"
				placeholder="Folder Name"
				maxLength={40}
				onChange={onSearchChange}
				value={searchData.data}
			/>
			<FoldersSearchSelector
				searchData={searchData}
				selectedFolder={selectedFolder}
				setSelectedFolder={setSelectedFolder}
			/>
			<div className="form-content__actions">
				<SubmitButton
					closeModal={closeModal}
					formData={{ ...gallery, folder_id: selectedFolder?.folder_id }}
					setFormData={setSelectedFolder}
					id={gallery.gallery_id}
					cleanup_id={gallery.folder_id}
					setItems={setGalleries}
					itemService={updateGallery}
					cleanupService={getGalleriesByFolderID}
					initialFormData={{ data: "" }}
					icon={faFolderOpen}
					title="Move Gallery"
				/>
			</div>
		</form>
	);
};