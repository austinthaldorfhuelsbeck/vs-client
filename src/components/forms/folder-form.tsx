import React, { useState, MouseEvent, Dispatch, SetStateAction, useEffect } from "react";
import { InputGroup } from "./input-group";
import { BaseFolder, Folder } from "src/models/folder";
import { InlineButton } from "../buttons/inline-button";
import { createFolder } from "src/services/folders.service";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  company_id: number;
  closeModal: () => void;
  folders: Array<Folder | null>;
  setFolders: Dispatch<SetStateAction<Array<Folder | null>>>;
  folder: Folder | null;
};

export const FolderForm: React.FC<Props> = ({
  company_id,
  closeModal,
  folders,
  setFolders,
  folder
}) => {
  const initialFormData: BaseFolder = {
    "company_id": company_id,
    "folder_name": "",
    "created_at": new Date(),
    "updated_at": new Date()
  };
  const [formData, setFormData] = useState<BaseFolder>(initialFormData);
  useEffect(() => {
    if (folder) setFormData(folder);
  }, [folder])

  const { getAccessTokenSilently } = useAuth0();

  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    const createFolderResponse = async (folder: BaseFolder) => {
      const audienceURL = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audienceURL,
            scope: "read:current_user"
          }
        });

        const newFolder: Folder = await (await createFolder(accessToken, formData)).data;
        
        setFormData(initialFormData); // clear the form
        closeModal(); // close the modal dialogue
        setFolders([ ...folders, newFolder ]) // update folders list
      } catch (error: any) {
        console.log(error);
      };
    }

    createFolderResponse(formData);
  };

  return (
    <form>
      <InputGroup
        type="text"
        name="folder_name"
        title={folder ? "Folder" : "New Folder"}
        placeholder="Folder Name"
        maxLength={40}
        onChange={onChange}
        value={formData.folder_name}
      />
      <div className="form-content__actions">
        <InlineButton
          onClick={onSubmit}
          icon={null}
          title={folder ? "Update Folder" : "Create Folder"}
        />
      </div>
    </form>
  );
};