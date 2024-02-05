import { MouseEvent, useEffect, useRef, useState } from "react";

const useContextMenu = () => {
	// ref for clicking outside
	const ref = useRef<HTMLDivElement>(null);

	// menu display state
	const [isMenu, setIsMenu] = useState<boolean>(false);
	const flipMenu = (c: boolean) => setIsMenu(!c);
	const [x, setX] = useState<number>(0);
	const [y, setY] = useState<number>(0);

	// event handlers
	const onClick = (e: MouseEvent<HTMLButtonElement>) => {
		// e.preventDefault()
		setX(e.clientX - 150);
		setY(e.clientY + 20);
		flipMenu(isMenu);
	};

	// event listeners
	useEffect(() => {
		const onClickOutside = (e: any) => {
			// hide when click is outside context menu
			if (ref.current && !ref.current.contains(e.target)) {
				setIsMenu(false);
			}
		};
		// add listener to DOM
		document.addEventListener("click", onClickOutside, true);
		// cleanup callback
		return () => {
			document.removeEventListener("click", onClickOutside, true);
		};
	}, [ref, setIsMenu]);

	return { isMenu, ref, x, y, onClick };
};

export default useContextMenu;
