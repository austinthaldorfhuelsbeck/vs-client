import { useAuth0 } from "@auth0/auth0-react";
import React, { MouseEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { InlineListItem } from "src/components/selectors/inline-list-item";
import { ApiResponse } from "src/models/api-response";
import { Company } from "src/models/company";
import { Folder } from "src/models/folder";
import { SearchData } from "src/models/search-data";
import { getFoldersByCompanyID } from "src/services/companies.service";
import { getCompaniesByUserID } from "src/services/folders.service";
import { getUserByEmail } from "src/services/users.service";

interface Props {
	searchData: SearchData;
	selectedFolder: Folder | null;
	setSelectedFolder: Dispatch<SetStateAction<Folder | null>>;
};

export const FoldersSearchSelector: React.FC<Props> = ({
	searchData,
	selectedFolder,
	setSelectedFolder,
}) => {
	// Auth0
	const { user, getAccessTokenSilently } = useAuth0();
	// state handler
	const [folders, setFolders] = useState<Array<Folder | null>>([]);

	// load all folders to initial state from api
	useEffect(() => {

		const getUserFolders = async (email: string) => {
      const audienceURL = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audienceURL,
            scope: "read:current_user"
          }
        });
				// get user profile
				const metadataResponse: ApiResponse =
					await getUserByEmail(accessToken, email);
				// get companies by user id
				const companiesResponse: ApiResponse =
					await getCompaniesByUserID(accessToken, metadataResponse.data.user_id);
				const companies: Array<Company | null> = companiesResponse.data;
				const foundFolders: Array<Folder | null> = [];

				// get folders by company id
				for (let i: number = 0; i < companies.length; i++) {
					const id = companies[i]?.company_id
					if (id) {
						const foldersResponse: ApiResponse = // get folders by company id
							await getFoldersByCompanyID(accessToken, id);
							const foldersFromApi: Array<Folder> = foldersResponse.data;
							foundFolders.push( ...foldersFromApi );
					};
				};
				setFolders(foundFolders);
			} catch (error: any) {
        console.log(error);
      };
		};

		user && user.email && getUserFolders(user.email);
	}, [getAccessTokenSilently, user]);

	// build list of folders
	const renderFolders = (folders: Array<Folder | null>) => (
		 folders
			.filter((folder: Folder | null) => ( // filter by search params
				folder?.folder_name.toLowerCase().includes(searchData.data.toLowerCase()))
			).map((folder: Folder | null) => folder && ( // build list element
				<InlineListItem
					key={folder.folder_id}
					onClick={(e: MouseEvent) => setSelectedFolder(folder)}
					title={folder.folder_name}
					selected={selectedFolder?.folder_id === folder.folder_id}
				/>
			))
	);
	
	return (
		<ul>
			{renderFolders(folders)}
		</ul>
	);
};