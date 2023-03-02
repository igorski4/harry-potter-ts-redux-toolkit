import clsx from "clsx";
import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { Card } from "./Card/Card";
import cl from "./Main.module.css";

export const Main: React.FC = () => {
  const { cards } = useAppSelector((state) => state.cardReducer);
  const { like } = useAppSelector((state) => state.likeReducer);
  const { input, select } = useAppSelector((state) => state.searchReducer);
  console.log(like);

  return (
    <div className={clsx("container", cl.main, cl.main__grid)}>
      {cards
        .filter(
          (card) =>
            card.house === select || select === "All school" || (!card.house && select === "Doesn't have a school")
        )
        .filter((card) => card.name.trim().toLowerCase().includes(input.trim().toLowerCase()))
        .map((card) => (
          <Card key={card.id} card={card} like={like.includes(card.name)}></Card>
        ))}
    </div>
  );
};
