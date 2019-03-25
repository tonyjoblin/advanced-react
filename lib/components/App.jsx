import React from 'react';
import ArticleList from './ArticleList';
import DataApi from 'state-api';
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
        <ArticleList articles={Object.values(articles)} articleActions={this.articleActions} />
      </div>
    );
  }
}

export default App;
