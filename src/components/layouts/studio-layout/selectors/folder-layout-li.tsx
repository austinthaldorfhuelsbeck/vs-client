import React from "react";
import { Link } from "react-router-dom";
import { Gallery } from "src/models/gallery";
import { GalleryContextMenuButton } from "../buttons/gallery-context-menu-button";

interface Props {
  gallery: Gallery | null;
}

export const FolderLayoutListItem: React.FC<Props> = ({ gallery }) => {
  // format date nicely
  const updatedDate: string = gallery?.updated_at ? (
      new Date(gallery.updated_at).toLocaleDateString(
        "en-us",
        {
          year: "numeric",
          month: "short",
          day: "numeric"
        }
      )
   ) : "";

  return (
    <li className="card">
      <Link to={`/studio/galleries/${gallery?.gallery_id}`}>
        <img
          src={gallery?.background_img_URL}
          alt={gallery?.gallery_name}
          className="card__img"
        />
        <div className="card__headers-container">
          <h4><strong>{gallery?.gallery_name}</strong></h4>
          <p>{`Updated - ${updatedDate}`}</p>
        </div>
      </Link>
      <GalleryContextMenuButton />
    </li>
  )
}