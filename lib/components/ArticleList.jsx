import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = (props) => {
  const { articles, articleActions } = props;
  return (
    <div>
      {articles.map(article => (
        <Article
          key={article.id}
          article={article}
          articleActions={articleActions}
        />
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      authorId: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  articleActions: PropTypes.shape({
    lookupAuthor: PropTypes.func.isRequired,
  }).isRequired,
};

export default ArticleList;
