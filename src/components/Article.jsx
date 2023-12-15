import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../utils/api';

import CommentList from './CommentList';
import ArticleVoting from './ArticleVoting';
import ErrorHandling from './ErrorHandling';
import Loading from './Loading';

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');
    getArticle(article_id)
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setErrMsg(error.response?.data || 'Error');
      });
  }, [article_id]);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : errMsg ? (
        <ErrorHandling errMsg={errMsg} />
      ) : (
        <article className="article-page">
          <div>
            <img src={article.article_img_url} alt={article.title} />
          </div>
          <div className="article-body">
            <h2>{article.title}</h2>
            <small>By {article.author}</small>
            <p>{article.body}</p>
            <ArticleVoting
              article_id={article_id}
              initialVotes={article.votes}
            />
          </div>
        </article>
      )}
      {!loading && !errMsg && <CommentList />}
    </main>
  );
}

export default Article;
