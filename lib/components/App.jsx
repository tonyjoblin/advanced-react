import React from 'react';
import Articles from './Articles';
import DataApi from '../DataApi';
import { data } from '../blog-data.json';

const api = new DataApi(data);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: api.getArticles(data),
      authors: api.getAuthors(data),
    };
  }

  render() {
    const { articles, authors } = this.state;
    return (
      <div>
        <Articles articles={articles} authors={authors} />
      </div>
    );
  }
}

export default App;
