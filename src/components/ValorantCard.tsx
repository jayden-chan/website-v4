import React from "react";
import { NUMERICAL_COLS, TEAMMATES } from "../constants";

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
        <table id={`${props.date}${props.map}${props.time}`} className="sbd">
          <tr>
            <th key="Icon" className="sbd-h-blank"></th>
            <th key="Player Name" className="sbd-h-name">
              Player Name
            </th>
            {NUMERICAL_COLS.map((header) => {
              return (
                <th key={header} className="sbd-head">
                  {header}
                </th>
              );
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
                    className={`sbd-cell ${
                      idx2 === 0 ? "sbd-name" : "sbd-num"
                    } ${TEAMMATES.includes(row[1]) ? "sbd-team" : "sbd-enemy"}`}
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
