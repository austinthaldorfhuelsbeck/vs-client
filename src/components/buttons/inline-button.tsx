import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  onClick: (e: any) => any;
  icon: IconDefinition | null;
  title: string;
};

export const InlineButton: React.FC<Props> = ({
  onClick,
  icon,
  title
}) => {
  return (
    <button
      className="button"
      onClick={onClick}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} />
      )}
      {" " + title}
    </button>
  )
};