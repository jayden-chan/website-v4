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

function computeHighlighting(code: string) {
  const rules = [
    {
      regex: /(const|let|var)/g,
      template: `<span style="color:#458588;">$1</span>`,
    },
    {
      regex: /(\.)(\w+)(\()/g,
      template: `$1<span style="color:#FB4934;">$2</span>$3`,
    },
    {
      regex: /(\w+ )(=>)( )/g,
      template: `<span style="color:#8EC07C;">$1</span><span style="color:#FABD2F;">$2</span>$3`,
    },
    {
      regex: /^(\s*)(\/\/.*$)/gm,
      template: `<i>$1<span style="color:#7C6F64;">$2</span></i>`,
    },
    {
      regex: /(return)/g,
      template: `<span style="color:#FB4934;">$1</span>`,
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
