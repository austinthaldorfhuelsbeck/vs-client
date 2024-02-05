import { MouseEvent, useEffect, useRef, useState } from "react";

const useModal = () => {
	// ref object
	const modalRef = useRef<HTMLDialogElement>(null);
	// state for open/close
	const [isOpen, setIsOpen] = useState(false);

	// handlers
	const toggle = (e: any) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};
	const onBackgroundClick = (e: MouseEvent<HTMLDialogElement>) => {
		if (e.target === modalRef.current) {
			toggle(e);
		}
	};

	// open and close when isOpen changes
	useEffect(() => {
		const ref = modalRef;
		if (ref.current) {
			if (isOpen) {
				ref.current.showModal();
			} else {
				ref.current.close();
			}
		}
	}, [isOpen]);

	return { modalRef, toggle, onBackgroundClick };
};

export default useModal;