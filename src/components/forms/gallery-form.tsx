import React, { Dispatch, SetStateAction, useState } from "react";
import { BaseGallery, Gallery } from "src/models/gallery";
import { InputGroup } from "./input-group";
import { createGallery, updateGallery } from "src/services/galleries.service";
import { CancelButton } from "../buttons/forms/cancel-button";
import { SubmitButton } from "../buttons/forms/submit-button";
import { getGalleriesByFolderID } from "src/services/folders.service";

interface Props {
  folder_id: number;
  closeModal: () => void;
  setGalleries: Dispatch<SetStateAction<Array<Gallery | null>>>;
  gallery: Gallery | null;
};

export const GalleryForm: React.FC<Props> = ({
  folder_id,
  closeModal,
  setGalleries,
  gallery
}) => {
  // form state
  const initialFormData: BaseGallery = {
    "folder_id": folder_id,
    "gallery_name": "",
    "created_at": new Date(),
    "updated_at": new Date()
  };
  const [formData, setFormData] = useState<BaseGallery>(gallery || initialFormData);

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
        initialFormData={gallery ? formData : initialFormData}
        closeModal={closeModal}
      />
      <InputGroup
        type="text"
        name="gallery_name"
        title={gallery ? "Gallery" : "New Gallery"}
        placeholder="Gallery Name"
        maxLength={40}
        onChange={onChange}
        value={formData.gallery_name}
      />
      <div className="form-content__actions">
        <SubmitButton
            closeModal={closeModal}
            formData={formData}
            setFormData={setFormData}
            id={gallery?.gallery_id}
            cleanup_id={folder_id}
            setItems={setGalleries}
            itemService={gallery ? updateGallery : createGallery}
            cleanupService={getGalleriesByFolderID}
            initialFormData={initialFormData}
            icon={null}
            title={gallery ? "Rename Gallery" : "Create Gallery"}
          />
      </div>
    </form>
  )
};