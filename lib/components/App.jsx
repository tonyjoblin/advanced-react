import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { initialData } = this.props;
    const { articles, authors } = initialData;
    this.state = { articles, authors };

    this.articleActions = {
      lookupAuthor: (authorId) => {
        const { authors } = this.state;
        return authors[authorId];
      },
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
