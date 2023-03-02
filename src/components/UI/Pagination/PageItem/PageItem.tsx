import clsx from "clsx";
import React from "react";
import cl from "./PageItem.module.css";

interface PageItemProps {
  children: number | string;
  onClick: () => void;
  disabledItem?: boolean;
  activeItem?: boolean;
}

export const PageItem: React.FC<PageItemProps> = ({ children, onClick, activeItem, disabledItem }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(cl.page, { [cl.page_active]: activeItem }, { [cl.page_disabled]: disabledItem })}
    >
      {children}
    </div>
  );
};
