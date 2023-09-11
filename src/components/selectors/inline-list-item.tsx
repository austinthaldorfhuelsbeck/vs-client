import React, { MouseEvent } from "react";

interface Props {
	onClick: (e: MouseEvent) => any;
	title: string;
	selected: boolean;
};

export const InlineListItem: React.FC<Props> = ({
	onClick,
	title,
	selected
}) => {
	return (
		<div
			className={selected ?
				"inline-menu__item inline-menu__item--active" :
				"inline-menu__item"}
			onClick={onClick}
		>
				{title}
		</div>
	);
};