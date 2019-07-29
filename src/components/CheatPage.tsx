import React from 'react';
import CheatCard from './CheatCard';

interface CheatPageProps {
  items: {
    title: string;
    body: string | null;
    code: string;
    tags: string[];
  }[];
}

const CheatPage: React.FC<CheatPageProps> = props => {
  return (
    <div className="fadein mt-32 max-w-5xl m-4">
      <h1 className="text-5xl font-bold">Vim</h1>
      <div
        style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
        }}
        className="mb-6 min-w-full"
      />
      <form>
        {/*
        // @ts-ignore */}
        <input
          type="text"
          name="search"
          id="cheatPageInputID"
          _onkeyup="filterBySearchText()"
          placeholder="Type to search"
          className="text-black min-w-full mb-6 p-2 rounded-lg"
        />
      </form>
      <ul id="cheatPageListID">
        {props.items.map((card, idx) => {
          return (
            <li key={idx}>
              <CheatCard
                title={card.title}
                body={card.body}
                code={card.code}
                tags={card.tags}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheatPage;
