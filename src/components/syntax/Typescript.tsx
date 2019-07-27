import React, {Component, ReactElement} from 'react';
import * as styles from './style.json';

interface IState {}
interface IProps {
  code: string;
}

class Typescript extends Component<IProps, IState> {
  render() {
    return (
      <pre
        className={styles.className}
        style={{backgroundColor: styles.backgroundColor}}
        dangerouslySetInnerHTML={computeHighlighting(this.props.code)}
      />
    );
  }
}

export default Typescript;

function color(colorCode: string, group: number): string {
  return `<span style="color:${colorCode};">$${group}</span>`;
}

function computeHighlighting(code: string) {
  const rules = [
    // word followed by colon
    {
      regex: /(\s*)(\w+)(:)/g,
      template: `$1${color('#8EC07C', 2)}$3`,
    },
    // strings in single/double quotes
    {
      regex: /(('.*?')|(&quot;.*?&quot;))/g,
      template: `<span style="color:#B8BB26;">$1</span>`,
    },
    // Promise followed by generic type
    {
      regex: /(Promise)(&lt;)/g,
      template: `${color('#458588', 1)}$2`,
    },
    // new Promise
    {
      regex: /(Promise)(\()/g,
      template: `${color('#8EC07C', 1)}$2`,
    },
    // top level function
    {
      regex: /(function )(\w+)(\()/g,
      template: `${color('#8EC07C', 1)}<b>${color('#B8BB26', 2)}</b>$3`,
    },
    // types
    {
      regex: /(number|string|boolean|any|object|undefined|null|never|void)/g,
      template: color('#FABD2F', 1),
    },
    // true/false
    {
      regex: /(true|false)/g,
      template: color('#B16286', 1),
    },
    // variable declarations
    {
      regex: /(const |let |var |new )/g,
      template: color('#458588', 1),
    },
    // other keywords
    {
      regex: /(async |await |return |type |interface |if |else )/g,
      template: color('#FB4934', 1),
    },
    // function calls
    {
      regex: /(\.)(\w+)(\()/g,
      template: `$1${color('#FB4934', 2)}$3`,
    },
    // arrow functions
    {
      regex: /(\w+ )(=&gt;)( )/g,
      template: `${color('#8EC07C', 1)}${color('#FABD2F', 2)}$3`,
    },
    // commented lines
    {
      regex: /^(\s*)(\/\/.*$)/gm,
      template: `<i>$1${color('#7C6F64', 2)}</i>`,
    },
  ];

  let processed = code;

  rules.forEach(rule => {
    processed = processed.replace(rule.regex, rule.template);
  });

  return {
    __html: `${processed}`,
  };
}
