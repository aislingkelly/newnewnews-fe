import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  if (loading) {
    return <p>loading!</p>;
  }
  if (error) {
    return <p>error!</p>;
  }
  return (
    <main>
      <h2>Article List</h2>

      <ul className="article-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <article class="article-list-article">
                <div>
                  <h3>{article.title}</h3>
                  <small>
                    Votes: {article.votes} | Comment count:{' '}
                    {article.comment_count} | Topic: {article.topic} | Created
                    at: {article.created_at}
                  </small>
                </div>
                <div>
                  <img
                    src={article.article_img_url}
                    className="article-list-img"
                  />
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ArticleList;
