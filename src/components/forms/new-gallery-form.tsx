import { useAuth0 } from "@auth0/auth0-react";
import React, { Dispatch, SetStateAction, useState, MouseEvent } from "react";
import { BaseGallery, Gallery } from "src/models/gallery";
import { InputGroup } from "./input-group";
import { InlineButton } from "../buttons/inline-button";
import { createGallery } from "src/services/galleries.service";
import { useNavigate } from "react-router-dom";

interface Props {
  folder_id: number;
  onClose: () => void;
  galleries: Array<Gallery | null>;
  setGalleries: Dispatch<SetStateAction<Array<Gallery | null>>>;
};

export const NewGalleryForm: React.FC<Props> = ({
  folder_id,
  onClose,
  galleries,
  setGalleries
}) => {
  const initialFormData: BaseGallery = {
    "folder_id": folder_id,
    "gallery_name": "",
    "created_at": new Date(),
    "updated_at": new Date()
  };
  const [formData, setFormData] = useState<BaseGallery>(initialFormData);

  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    const createGalleryResponse = async (gallery: BaseGallery) => {
      const audienceURL = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audienceURL,
            scope: "read:current_user"
          }
        });

        const newGallery: Gallery = await (await createGallery(accessToken, formData)).data;
        
        setFormData(initialFormData); // clear the form
        onClose(); // close the modal dialogue
        setGalleries([ ...galleries, newGallery ]) // update galleries list
        navigate(`/studio/galleries/${newGallery.gallery_id}`) // go to new gallery
      } catch (error: any) {
        console.log(error);
      };
    }

    createGalleryResponse(formData);
  };

  return (
    <form>
      <InputGroup
        type="text"
        name="gallery_name"
        title="New Gallery"
        placeholder="Gallery Name"
        onChange={onChange}
        value={formData.gallery_name}
      />
      <p>
        Gallery name is not visible to clients.
      </p>
      <br />
      <InlineButton
        onClick={onSubmit}
        icon={null}
        title="Create Gallery"
      />
    </form>
  )
};