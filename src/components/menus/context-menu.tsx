
import React, { CSSProperties, Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";

interface ContextMenuProps {
  xPosition: number;
  yPosition: number;
  setIsContextMenu: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element;
};

export const ContextMenu: React.FC<ContextMenuProps> = ({
  xPosition,
  yPosition,
  setIsContextMenu,
  children
}) => {
    const ref = useRef<HTMLDivElement>(null);

    // event listener to hide menu on click outside
    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsContextMenu(false);
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        }
    }, [ref, setIsContextMenu]);

    // position the menu
    const contextMenuStyle: CSSProperties = {
        top: yPosition + 20, // get it out of the way
        left: xPosition - 80 // of the cursor
    }


    return (
        <div
            ref={ref}
            className="context-menu"
            style={contextMenuStyle}
        >
            {children}
        </div>
    );
};