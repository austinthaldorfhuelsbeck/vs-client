import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  MouseEvent
} from "react";
import styles from "./studio-modal.module.scss"

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
};

export const StudioModal: React.FC<Props> = ({
  isOpen,
  onClose,
  children
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const dialogClasses = useMemo(() => {
    const _arr = [styles["modal"]];
    if (!isOpen) _arr.push(styles["modal--closing"]);

    return _arr.join(" ");
  }, [isOpen]);

  // event listener for close
  const onCancel = useCallback(
    () => onClose(),
    [onClose]
  );

  // event listener for clicking outside
  const onClick = useCallback(
    (e: MouseEvent) => {
      const { current: el } = modalRef;
      if (e.target === el) onClose();
    },
    [onClose]
  );

  // event listener for close click on anim end
  const onAnimEnd = useCallback(() => {
    const ref = modalRef;
    if (ref.current && !isOpen) ref.current.close();
  }, [isOpen]);

  // open/close when isOpen changes
  useEffect(() => {
    const ref = modalRef;
    if (ref.current && isOpen) ref.current.showModal();
  }, [isOpen]);

  return (
    <dialog
      ref={modalRef}
      className={dialogClasses}
      onClose={onClose}
      onCancel={onCancel}
      onClick={onClick}
      onAnimationEnd={onAnimEnd}
    >
      <div className={styles["modal__container"]}>{children}</div>
    </dialog>
  );
};