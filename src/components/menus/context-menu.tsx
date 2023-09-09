
import React, { CSSProperties, Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";
import { MenuItem } from "src/models/menu-item";
import { MenuListItem } from "./context-menu-li";

interface ContextMenuProps {
  xPosition: number;
  yPosition: number;
  menuItems: Array<MenuItem>;
  setIsContextMenu: Dispatch<SetStateAction<boolean>>;
};

export const ContextMenu: React.FC<ContextMenuProps> = ({
  xPosition,
  yPosition,
  menuItems,
  setIsContextMenu
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

    // build the menu
    const listMenu = (items: Array<MenuItem>) => {
        return items.map((item, index) => (
            <div
                key={index}
                onClick={item.action}
            >
                <MenuListItem
                    icon={item.icon}
                    title={item.title}
                />
            </div>
        ));
    };

    return (
        <div
            ref={ref}
            className="context-menu"
            style={contextMenuStyle}
        >
            {listMenu(menuItems)}
        </div>
    );
};