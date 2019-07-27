import React, {Component} from 'react';
import CheatCard from '../../components/CheatCard';

import vim from '../../../content/cheatsheets/vim.json';

interface IState {
  showing: {
    title: string;
    body: string | null;
    code: string;
    tags: string[];
  }[];
  searchText: string;
}

interface IProps {}

class Vim extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showing: vim,
      searchText: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    const target = event.target;
    const value = target.value;

    const filteredItems = vim.filter(item => {
      const st = value;
      const matched =
        item.title.includes(st) ||
        // @ts-ignore
        (item.body && item.body.includes(st)) ||
        item.code.includes(st) ||
        item.tags.some(tag => tag.includes(st));

      return matched;
    });

    if (filteredItems.length === 0) {
      filteredItems.push({
        title: 'no items found :(',
        body: null,
        code: '',
        tags: [''],
      });
    }

    this.setState({
      searchText: value,
      showing: filteredItems,
    });
  }

  render() {
    return (
      <div className="fadein mt-32 max-w-5xl m-4">
        <h1 className="text-5xl font-bold">Vim</h1>
        <div
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
          }}
          className="mb-6 min-w-full"
        />
        <form>
          <input
            type="text"
            name="search"
            placeholder="Type to search"
            value={this.state.searchText}
            onChange={this.handleChange}
            className="text-black min-w-full mb-6 p-2 rounded-lg"
          />
        </form>
        <ul>
          {this.state.showing.map((card, idx) => {
            return (
              <li key={idx}>
                <CheatCard
                  title={card.title}
                  body={card.body}
                  code={card.code}
                  tags={card.tags}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Vim;
