import React, {Component} from 'react';
import {highlight} from 'highlight.js';

interface CheatCardProps {
  title: string;
  body: string | null;
  code: string;
  tags: string[];
  language?: string;
}

const CheatCard: React.FC<CheatCardProps> = (props: CheatCardProps) => {
  const highlighted = props.language
    ? highlight(props.language, props.code)
    : {
        value: props.code,
      };

  return (
    <div className="rounded-lg bg-white p-8 mb-6" style={{color: '#1B1F22'}}>
      <h3 className="font-bold text-3xl">{props.title}</h3>
      <p className="text-lg">{props.body}</p>

      <pre
        className="text-base my-4 rounded-lg p-3 overflow-x-auto"
        style={{
          backgroundColor: '#1D2021',
          color: '#EBDBB2',
        }}
        dangerouslySetInnerHTML={{
          __html: highlighted.value,
        }}
      />

      <small>
        Tags:
        {props.tags.map((t, idx, all) => {
          return (
            <span key={idx} className="ml-2">
              {t}
              {idx === all.length - 1 ? '' : ','}
            </span>
          );
        })}
      </small>
    </div>
  );
};

export default CheatCard;
