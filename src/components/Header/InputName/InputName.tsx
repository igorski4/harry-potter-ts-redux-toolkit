import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import { searchlSlice } from "../../../store/reducers/SearchSlice";
import { Input } from "../../UI/Input/Input";
import cl from "./InputName.module.css";

export const InputName: React.FC = () => {
  const { changeInput } = searchlSlice.actions;
  const { input } = useAppSelector((state) => state.searchReducer);

  return (
    <div>
      <p className={cl.text}>Name</p>
      <Input value={input} changeInput={changeInput} type="text" placeholder="Hermione" />
    </div>
  );
};
