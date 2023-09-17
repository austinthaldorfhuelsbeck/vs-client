/* eslint-disable no-restricted-globals */
import { useAuth0 } from "@auth0/auth0-react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { Dispatch, SetStateAction } from "react";
import { ContextMenuListItem } from "src/components/menus/context-menu-li";
import { ApiResponse } from "src/models/api-response";

interface Props {
	item: any;
	id: number;
	deleteService: (accessToken: string, item_id: number) => Promise<ApiResponse>;
	cleanupService: (...args: any) => Promise<ApiResponse>;
	setItems: Dispatch<SetStateAction<Array<any>>>;
	cleanup_id: number;
	closeContextMenu: () => void;
};

export const DeleteButton: React.FC<Props> = ({
	item,
	id,
	deleteService,
	cleanupService,
	setItems,
	cleanup_id,
	closeContextMenu
}) => {
	// auth0
	const { getAccessTokenSilently } = useAuth0();
	
	// delete handler
	const onDelete = (e: MouseEvent) => {
		e.preventDefault();

		// comfirm delete
		const confirmDelete: boolean = confirm("Once this item is deleted, it cannot be recovered. Are you sure?");
		
		// delete item
		const deleteItemResponse = async (item_id: number) => {
			const audienceURL = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
				const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audienceURL,
            scope: "read:current_user"
          }
        });

				await deleteService(accessToken, item_id);

				// refresh folders state
				const getCleanupResponse = async (id: number) => {
					try {
						const CleanupResponse: ApiResponse = await cleanupService(accessToken, id);
						setItems(CleanupResponse.data);
					} catch (error: any) {
						console.log(error);
					};
				};
				getCleanupResponse(cleanup_id);

				// close the context menu
				closeContextMenu();
			} catch (error: any) {
        console.log(error);
      };
		};

		confirmDelete && deleteItemResponse(id);
	};
	
	return (
		<ContextMenuListItem
			onClick={onDelete}
			title="Delete"
			icon={faTrash}
		/>
	);
};