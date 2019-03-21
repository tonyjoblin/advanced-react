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

    const { authors } = this.state;

    this.articleActions = {
      lookupAuthor: authorId => authors[authorId],
    };
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <Articles articles={articles} actions={this.articleActions} />
      </div>
    );
  }
}

export default App;
