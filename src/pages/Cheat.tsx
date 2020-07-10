import React from "react";
import CheatPage from "../components/CheatPage";

// @ts-ignore
import { cards as linux } from "../../content/cheatsheets/linux.toml";
// @ts-ignore
import { cards as oneliners } from "../../content/cheatsheets/oneliners.toml";
// @ts-ignore
import { cards as programming } from "../../content/cheatsheets/programming.toml";

const Cheat = () => {
  const cards = [].concat(linux).concat(oneliners).concat(programming);
  return <CheatPage items={cards} title="Cheatsheet" />;
};

export default Cheat;
