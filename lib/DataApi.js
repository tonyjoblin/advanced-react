function mapToObject(array) {
  return array.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}

class DataApi {
  constructor(data) {
    this.data = data;
  }

  getArticles() {
    return mapToObject(this.data.articles);
  }

  getAuthors() {
    return mapToObject(this.data.authors);
  }
}

export default DataApi;
