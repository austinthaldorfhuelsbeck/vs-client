import React from "react";
import { Button, Container } from "./ContextMenu.style";
import useContextMenu from "./useContextMenu";

interface Props {
	button: JSX.Element;
	content: JSX.Element;
}

const ContextMenu: React.FC<Props> = ({ button, content }) => {
	const { isMenu, ref, x, y, onClick } = useContextMenu();

	return (
		<span ref={ref}>
			<Button onClick={onClick}>{button}</Button>
			{isMenu && (
				<Container x={x} y={y}>
					{content}
				</Container>
			)}
		</span>
	);
};

export default ContextMenu;
