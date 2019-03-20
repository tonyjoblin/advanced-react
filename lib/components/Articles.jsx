import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const Articles = (props) => {
  const { articles, authors } = props;
  // console.log(props);
  return (
    <div>
      {Object.values(articles).map(article => <Article key={article.id} article={article} author={authors[article.authorId]} />)}
    </div>
  );
};

Articles.propTypes = {
  articles: PropTypes.object.isRequired,
  authors: PropTypes.object.isRequired,
};

export default Articles;
