import { useAuth0 } from "@auth0/auth0-react";
import React, { Dispatch, SetStateAction } from "react";
import { ApiResponse } from "src/models/api-response";
import { InlineButton } from "../inline-button";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface Props {
	closeModal: () => void;
	formData: any;
	setFormData: Dispatch<SetStateAction<any>>;
	setItems: Dispatch<SetStateAction<Array<any>>>;
	itemService: (...args: any) => Promise<ApiResponse>;
	cleanupService: (...args: any) => Promise<ApiResponse>;
	initialFormData: any;
	id: number | undefined;
	cleanup_id: number;
	icon: IconDefinition | null;
	title: string;
};

// A button to submit a form on a modal element
// The button creates or updates an item in the db
// and re-renders the studio state
export const SubmitButton: React.FC<Props> = ({
	closeModal, // handler to close the modal dialogue
	formData,
	setFormData,
	setItems,
	itemService,
	cleanupService,
	initialFormData,
	id,
	cleanup_id,
	icon,
	title
}) => {
	// auth0
	const { getAccessTokenSilently } = useAuth0();

	// submit handler
	const onSubmit = (e: MouseEvent) => {
    e.preventDefault();

		// create or update item
    const getItemResponse = async (formData: any, item_id: number | undefined) => {
      const audienceURL = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
				const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audienceURL,
            scope: "read:current_user"
          }
        });

				// create or update with API services
				if (item_id) {
					await itemService(accessToken, formData, item_id);
				} else {
					await itemService(accessToken, formData);
				}

        // refresh items state
				const getCleanupResponse = async (id: number) => {
					try {
						const cleanupResponse: ApiResponse = await cleanupService(accessToken, id);
						setItems(cleanupResponse.data);
					} catch (error: any) {
						console.log(error);
					};
				};
				getCleanupResponse(cleanup_id);
        
				// clear the form
				setFormData(initialFormData);
        
				// close the modal dialogue
				closeModal();
      } catch (error: any) {
        console.log(error);
      };
    };

    getItemResponse(formData, id);
  };

	return (
		<InlineButton
			onClick={onSubmit}
			icon={icon}
			title={title}
		/>
	);
};