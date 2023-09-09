
import React, { CSSProperties, MouseEvent, useEffect, useRef } from "react";
import { MenuItem } from "src/models/menu-item";
import { MenuListItem } from "./context-menu-li";

interface ContextMenuProps {
  xPosition: number;
  yPosition: number;
  menuItems: Array<MenuItem>;
  onContextClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const ContextMenu: React.FC<ContextMenuProps> = ({
  xPosition,
  yPosition,
  menuItems,
  onContextClick
}) => {
    const ref = useRef<HTMLDivElement>(null);

    // event listener to hide menu on click outside
    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onContextClick && onContextClick(e);
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        }
    }, [onContextClick]);

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