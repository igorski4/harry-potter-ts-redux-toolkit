import React from "react";
import clsx from "clsx";
import cl from "./Header.module.css";
import { InputName } from "./InputName/InputName";
import { SelectSchool } from "./SelectSchool/SelectSchool";

export const Header: React.FC = () => {
  return (
    <div className={clsx("container", cl.header)}>
      <h1 className={cl.title}>Harry Potter</h1>
      <p className={cl.subtitle}>View all characters from the Harry Potter universe</p>
      <div className={cl.wrapper}>
        <InputName />
        <SelectSchool />
      </div>
    </div>
  );
};
