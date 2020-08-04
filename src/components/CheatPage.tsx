import React from "react";
import CheatCard from "./CheatCard";

interface CheatPageProps {
  title: string;
  items: {
    title: string;
    body: string | null;
    code: string;
    tags: string[];
    language?: string;
  }[];
}

const mx = "mx-4";

const CheatPage = (props: CheatPageProps) => {
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
          placeholder="Type to search"
          className="text-black min-w-full mb-6 p-2 rounded-lg"
        />
      </form>
      <ul id="cheatPageListID" className={mx}>
        {props.items.map((card, idx) => {
          return (
            <li key={idx}>
              <CheatCard
                title={card.title}
                body={card.body}
                code={card.code}
                tags={card.tags}
                language={card.language}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheatPage;
