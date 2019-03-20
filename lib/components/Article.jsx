import React from 'react';

const Article = (props) => {
  const { article, author } = props;
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.date}</p>
      <p><a href={author.website}>{author.firstName} {author.lastName}</a></p>
      <div>{article.body}</div>
    </div>
  );
};

export default Article;
