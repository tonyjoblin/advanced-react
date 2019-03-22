import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = (props) => {
  const { articles, articleActions } = props;
  return (
    <div>
      {Object.values(articles).map(article => (
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
  articles: PropTypes.object.isRequired,
  articleActions: PropTypes.object.isRequired,
};

export default ArticleList;
