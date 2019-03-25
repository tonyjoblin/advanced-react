import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from './ArticleList';

describe('ArticleList', () => {
  const testProps = {
    articles: [
      {
        id: 'a',
        authorId: '1',
        body: 'body',
        title: 'title',
        date: '2019-01-02',
      },
      {
        id: 'b',
        authorId: '1',
        body: 'body',
        title: 'title',
        date: '2019-01-02',
      },
    ],
    articleActions: {
      lookupAuthor: jest.fn(() => ({})),
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      (<ArticleList {...testProps} />),
    ).toJSON();

    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});
