import DataApi from './DataApi';
import { data } from './blog-data';

const api = new DataApi(data);

describe('data api', () => {
  describe('getArticles', () => {
    it('returns an articles object', () => {
      const articles = api.getArticles();
      const articleId = data.articles[0].id;
      const articleTitle = data.articles[0].title;

      expect(articles).toHaveProperty(articleId);
      expect(articles[articleId].title).toEqual(articleTitle);
    });
  });

  describe('getAuthors', () => {
    it('returns an authors object', () => {
      const authors = api.getAuthors();
      const authorId = data.authors[0].id;
      const authorFirstName = data.authors[0].firstName;

      expect(authors).toHaveProperty(authorId);
      expect(authors[authorId].firstName).toEqual(authorFirstName);
    });
  });
});
