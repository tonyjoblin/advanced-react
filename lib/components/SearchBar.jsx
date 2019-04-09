import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.doSearch = debounce(this.doSearch.bind(this), 300);
  }

  doSearch() {
    const { searchTerm } = this.state;
    const { doSearch } = this.props;
    doSearch(searchTerm);
  }

  handleSearch(event) {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <input
        type="search"
        placeholder="Enter search term"
        onChange={this.handleSearch}
        value={searchTerm}
      />
    );
  }
}

export default SearchBar;
