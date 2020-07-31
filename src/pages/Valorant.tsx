import React from "react";
import ValorantPage from "../components/ValorantPage";

// @ts-ignore
import { games } from "../../content/valorant_logs.toml";

const Valorant = () => {
  return <ValorantPage games={games} title="Valorant Logs" />;
};

export default Valorant;
