import clsx from "clsx";
import React from "react";
import { Pagination } from "../UI/Pagination/Pagination";
import cl from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <div className={clsx("container", cl.footer)}>
      <Pagination />
    </div>
  );
};
