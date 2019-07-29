import React, {Component} from 'react';

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
      <div className="rounded-lg bg-white p-8 mb-6" style={{color: '#1B1F22'}}>
        <h3 className="font-bold text-3xl">{this.props.title}</h3>
        <p className="text-lg">{this.props.body}</p>

        <pre
          className="text-base my-4 rounded-lg p-3"
          style={{backgroundColor: '#1D2021', color: '#EBDBB2'}}>
          {this.props.code}
        </pre>

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
