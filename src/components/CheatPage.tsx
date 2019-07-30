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

const mx = 'mx-4';

const CheatPage: React.FC<CheatPageProps> = props => {
  return (
    <div className="fadein mt-32 w-full md:max-w-5xl">
      <h1 className="text-5xl font-bold mx-4">Vim</h1>
      <div
        style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
        }}
        className="mb-6 mx-4"
      />
      <form className={mx}>
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
