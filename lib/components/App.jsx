import React from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { initialData } = this.props;
    this.state = { ...initialData };

    this.articleActions = {
      lookupAuthor: (authorId) => {
        const { authors } = this.state;
        return authors[authorId];
      },
    };

    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  setSearchTerm(searchTerm) {
    this.setState({ searchTerm });
  }

  render() {
    const { searchTerm } = this.state;
    let { articles } = this.state;
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm} />
        <ArticleList
          articles={Object.values(articles)}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}

export default App;
