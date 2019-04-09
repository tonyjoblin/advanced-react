class DataApi {
  constructor(rawData) {
    this.data = {
      articles: DataApi.mapToObject(rawData.articles),
      authors: DataApi.mapToObject(rawData.authors),
      searchTerm: '',
    };
  }

  static mapToObject(array) {
    return array.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }

  getArticles() {
    return this.data.articles;
  }

  getAuthors() {
    return this.data.authors;
  }

  getState() {
    return this.data;
  }
}

module.exports = DataApi;
