import React, {Component} from 'react';
import Typescript from './syntax/Typescript';

interface IProps {
  title: string;
  body: string | null;
  code: string;
  tags: string[];
}

interface IState {}

class CheatCard extends Component<IProps, IState> {
  render() {
    return (
      <div className="rounded-lg bg-white p-8 mb-4" style={{color: '#1B1F22'}}>
        <h3 className="font-bold text-3xl">{this.props.title}</h3>
        <p>{this.props.body}</p>

        <Typescript code={this.props.code} />

        <small>
          Tags:
          {this.props.tags.map((t, idx) => (
            <span key={idx} className="ml-2">
              {t}
            </span>
          ))}
        </small>
      </div>
    );
  }
}

export default CheatCard;
