import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle, patchArticle } from '../utils/api';
import Comments from './Comments';

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticle(article_id)
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  const upvoteArticle = (article_id) => {
    patchArticle(article_id).catch((err) => {
      setError(true);
    });
    setArticle((currArticle) => {
      return { ...currArticle, votes: currArticle.votes + 1 };
    });
  };

  if (loading) {
    return <p>loading!</p>;
  }
  if (error) {
    return <p>error!</p>;
  }
  return (
    <main>
      <article>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
        <small>This article was written by: {article.author}</small>
        <p>Votes: {article.votes}</p>
        <button onClick={() => upvoteArticle(article_id)}>Upvote: ☝️</button>
      </article>
      <Comments />
    </main>
  );
}

export default Article;
