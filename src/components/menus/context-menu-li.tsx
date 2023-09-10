import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
	onClick: (e: any) => any;
	icon: IconDefinition;
	title: string;
};

export const ContextMenuListItem: React.FC<Props> = ({
	onClick,
	icon,
	title
}) => {
	return (
		<div className="context-menu__item">
				<FontAwesomeIcon icon={icon} />
				&nbsp;
				&nbsp;
				{title}
		</div>
	);
};