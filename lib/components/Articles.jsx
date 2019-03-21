import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const Articles = (props) => {
  const { articles, actions } = props;
  // console.log(props);
  return (
    <div>
      {Object.values(articles).map(article => (<Article
        key={article.id}
        article={article}
        actions={actions}
      />))}
    </div>
  );
};

Articles.propTypes = {
  articles: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Articles;
