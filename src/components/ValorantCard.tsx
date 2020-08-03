import React from "react";
import { SCOREBOARD_HEADERS, TEAMMATES } from "../constants";

export interface ValorantCardProps {
  date: string;
  map: string;
  score: [number, number];
  time: string;
  url: string;
  scoreboard: string[][];
}

const CheatCard = (props: ValorantCardProps) => {
  return (
    <div className="rounded-lg bg-white p-8 mb-6" style={{ color: "#1B1F22" }}>
      <h3 className="font-bold text-3xl">
        <span>[{props.date}]</span>
        {` [${props.map}] [${props.score[0]} - ${props.score[1]}] [${
          props.time
        }] (${props.score[0] < props.score[1] ? "DEFEAT" : "VICTORY"})`}
      </h3>

      {props.url ? (
        <h3>
          <a target="_blank" href={props.url} style={{ color: "#3366BB" }}>
            {props.url}
          </a>
        </h3>
      ) : (
        <h3>No recording available</h3>
      )}

      <pre className="text-base my-4 rounded-lg overflow-x-auto game-card">
        <table className="scrbd">
          <tr>
            {SCOREBOARD_HEADERS.map((header) => {
              return <th className="scrbd-head">{header}</th>;
            })}
          </tr>
          {props.scoreboard.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <img src={`/agents/${row[0]}.png`} />
                </td>
                {row.slice(1).map((val, idx2) => (
                  <td
                    className={`scrbd-cell ${
                      idx2 === 0 ? "scrbd-name" : "scrbd-num"
                    } ${
                      TEAMMATES.includes(row[1]) ? "scrbd-team" : "scrbd-enemy"
                    }`}
                    key={idx2}
                  >
                    {idx2 === 0 ? <b>{val}</b> : val}
                  </td>
                ))}
              </tr>
            );
          })}
        </table>
      </pre>
    </div>
  );
};

export default CheatCard;
