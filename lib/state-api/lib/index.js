class DataApi {
  constructor(data) {
    this.data = data;
  }

  static mapToObject(array) {
    return array.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }

  getArticles() {
    return DataApi.mapToObject(this.data.articles);
  }

  getAuthors() {
    return DataApi.mapToObject(this.data.authors);
  }
}

module.exports = DataApi;
