import React from "react";
import ValorantCard, { ValorantCardProps } from "./ValorantCard";

interface ValorantPageProps {
  title: string;
  games: ValorantCardProps[];
}

const mx = "mx-4";

const Valorant = (props: ValorantPageProps) => {
  return (
    <div style={{ minWidth: "50%", maxWidth: "95%" }} className="fadein mt-32">
      <h1 className="text-5xl font-bold mx-4">{props.title}</h1>
      <div
        style={{
          borderBottomColor: "white",
          borderBottomWidth: 1,
        }}
        className="mb-6 mx-4"
      />
      <form className={mx}>
        <input
          type="text"
          name="search"
          id="cheatPageInputID"
          // @ts-ignore
          _onkeyup="filterBySearchText()"
          placeholder="Filter by date"
          className="text-black min-w-full mb-6 p-2 rounded-lg"
        />
      </form>
      <ul id="cheatPageListID" className={mx}>
        {props.games.map((game, idx) => {
          return (
            <li key={idx}>
              <ValorantCard {...game} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Valorant;
