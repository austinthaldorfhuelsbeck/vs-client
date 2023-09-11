
import React, { CSSProperties, Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";

interface ContextMenuProps {
  xPosition: number;
  yPosition: number;
  containerRef: RefObject<HTMLDivElement>;
  setIsContextMenu: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element;
};

export const ContextMenu: React.FC<ContextMenuProps> = ({
  xPosition,
  yPosition,
  containerRef,
  setIsContextMenu,
  children
}) => {
    // event listener to hide menu on click outside
    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsContextMenu(false);
                console.log("Click outside. Context Menu: ", false);
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        }
    }, [containerRef, setIsContextMenu]);

    // position the menu
    const contextMenuStyle: CSSProperties = {
        top: yPosition + 20, // get it out of the way
        left: xPosition - 80 // of the cursor
    }

    return (
        <div
            className="context-menu"
            style={contextMenuStyle}
        >
            {children}
        </div>
    );
};