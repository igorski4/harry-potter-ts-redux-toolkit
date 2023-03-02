import clsx from "clsx";
import React from "react";
import cl from "./Likes.module.css";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import { useAppSelector } from "../../hooks/redux";

export const Likes: React.FC = () => {
  const { cards } = useAppSelector((state) => state.cardReducer);
  const { like } = useAppSelector((state) => state.likeReducer);

  return (
    <div className="container">
      <div className={cl.likes}>
        <Link to="/">
          <button className={cl.btn}>← Back To All</button>
        </Link>
        <h1 className={cl.title}>Liked ones</h1>
        <p className={cl.subtitle}>Your favorite characters from the Harry Potter universe.</p>
      </div>
      <div className={cl.main}>
        {cards
          .filter((card) => like.includes(card.name))
          .map((card) => (
            <Card key={card.id} card={card} like={like.includes(card.name)}></Card>
          ))}
      </div>
    </div>
  );
};
