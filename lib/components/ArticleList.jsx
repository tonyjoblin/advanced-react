import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = (props) => {
  const { articles, actions } = props;
  // console.log(props);
  return (
    <div>
      {Object.values(articles).map(article => (
        <Article
          key={article.id}
          article={article}
          actions={actions}
        />
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default ArticleList;
