import React from "react";

export interface ValorantCardProps {
  date: string;
  map: string;
  score: [number, number];
  time: string;
  url: string;
  scoreboard: string[][];
}

const headers = [
  "Player Name",
  "Avg Combat Score",
  "K",
  "D",
  "A",
  "Avg Econ Score",
  "First Bloods",
  "Plants",
  "Defuses",
];

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
          Link:{" "}
          <a target="_blank" href={props.url} style={{ color: "#3366BB" }}>
            {props.url}
          </a>
        </h3>
      ) : (
        <h3>No Link Available</h3>
      )}

      <pre
        className="text-base my-4 rounded-lg overflow-x-auto"
        style={{
          backgroundColor: "#1D2021",
          color: "#EBDBB2",
        }}
      >
        <table
          style={{
            borderCollapse: "collapse",
          }}
        >
          <tr>
            {headers.map((header) => {
              return (
                <th
                  style={{
                    padding: 15,
                    borderWidth: 2,
                    borderStyle: "none none solid none",
                    borderColor: "#EBDBB2",
                  }}
                >
                  {header}
                </th>
              );
            })}
          </tr>
          {props.scoreboard.map((row, idx) => {
            return (
              <tr key={idx}>
                {row.map((val, idx2) => (
                  <td
                    style={{
                      textAlign: idx2 === 0 ? "left" : "center",
                      verticalAlign: "middle",
                      padding: 10,
                      margin: 10,
                    }}
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
