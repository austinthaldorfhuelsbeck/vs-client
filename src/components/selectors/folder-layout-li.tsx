import React from "react";
import { Link } from "react-router-dom";
import { Gallery } from "src/models/gallery";
import { GalleryContextMenuButton } from "../buttons/gallery-context-menu-button";

interface Props {
  gallery: Gallery | null;
}

export const FolderLayoutListItem: React.FC<Props> = ({ gallery }) => {
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
          <h6><em>{`Updated - ${String(gallery?.updated_at).slice(0, 10)}`}</em></h6>
        </div>
      </Link>
      <GalleryContextMenuButton />
    </li>
  )
}