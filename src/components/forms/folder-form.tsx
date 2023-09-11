import React, { useState, Dispatch, SetStateAction } from "react";
import { InputGroup } from "./input-group";
import { BaseFolder, Folder } from "src/models/folder";
import { SubmitButton } from "../buttons/forms/submit-button";
import { createFolder, updateFolder } from "src/services/folders.service";
import { getFoldersByCompanyID } from "src/services/companies.service";
import { CancelButton } from "../buttons/forms/cancel-button";

interface Props {
  company_id: number;
  closeModal: () => void;
  setFolders: Dispatch<SetStateAction<Array<Folder | null>>>;
  folder: Folder | null;
};

export const FolderForm: React.FC<Props> = ({
  company_id,
  closeModal,
  setFolders,
  folder
}) => {
  // initial state
  const maxLength: number = 40;
  const initialFormData: BaseFolder = {
    "company_id": company_id,
    "folder_name": "",
    "created_at": new Date(),
    "updated_at": new Date()
  };
  const [formData, setFormData] = useState<BaseFolder>(folder || initialFormData);

  // change handler
  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="form-content__form-container">
      <CancelButton
        setFormData={setFormData}
        initialFormData={folder ? formData : initialFormData}
        closeModal={closeModal}
      />
      <InputGroup
        type="text"
        name="folder_name"
        title={folder ? "Folder" : "New Folder"}
        placeholder="Folder Name"
        maxLength={maxLength}
        onChange={onChange}
        value={formData.folder_name}
      />
      <div className="form-content__subscript-container">
        {`${formData.folder_name.length}/${maxLength}`}
      </div>
      <div className="form-content__actions">
        <SubmitButton
          closeModal={closeModal}
          formData={formData}
          setFormData={setFormData}
          id={folder?.folder_id}
          cleanup_id={company_id}
          setItems={setFolders}
          itemService={folder ? updateFolder : createFolder}
          cleanupService={getFoldersByCompanyID}
          initialFormData={initialFormData}
          icon={null}
          title={folder ? "Rename Folder" : "Create Folder"}
        />
      </div>
    </form>
  );
};