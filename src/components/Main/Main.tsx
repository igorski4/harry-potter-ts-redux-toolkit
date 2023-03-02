import clsx from "clsx";
import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { Card } from "../Card/Card";
import cl from "./Main.module.css";
import heart from "./heart.svg";
import { Link } from "react-router-dom";

export const Main: React.FC = () => {
  const { cards } = useAppSelector((state) => state.cardReducer);
  const { like } = useAppSelector((state) => state.likeReducer);
  const { input, select } = useAppSelector((state) => state.searchReducer);
  const { tempPage, limit } = useAppSelector((state) => state.paginationReducer);

  return (
    <div className={clsx("container", cl.main, cl.main__grid)}>
      {cards
        .filter(
          (card) =>
            card.house === select || select === "All school" || (!card.house && select === "Doesn't have a school")
        )
        .filter((card) => card.name.trim().toLowerCase().includes(input.trim().toLowerCase()))
        .slice(tempPage * limit, (tempPage + 1) * limit)
        .map((card) => (
          <Card key={card.id} card={card} like={like.includes(card.name)}></Card>
        ))}
      <Link to="/likes">
        <button className={cl.btn}>
          <img src={heart} alt="❤" />
          Show Liked
        </button>
      </Link>
    </div>
  );
};
