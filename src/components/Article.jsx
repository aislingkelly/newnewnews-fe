import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../utils/api';
import CommentList from './CommentList';
import ArticleVoting from './ArticleVoting';
import ErrorHandling from './ErrorHandling';

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setError(false);
    getArticle(article_id)
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        setErrMsg(error.response.data);
      });
  }, []);

  if (loading) {
    return <p>loading!</p>;
  }
  if (error) {
    return <ErrorHandling errMsg={errMsg} />;
  }
  return (
    <main>
      <article>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
        <small>This article was written by: {article.author}</small>
        <ArticleVoting article_id={article_id} initialVotes={article.votes} />
      </article>

      <CommentList />
    </main>
  );
}

export default Article;
