import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';
import { useSearchParams } from 'react-router-dom';
import ArticleCard from './ArticleCard';

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get('topic');
  useEffect(() => {
    getArticles(topicQuery)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [topicQuery]);

  if (loading) {
    return <p>loading!</p>;
  }
  if (error) {
    return <p>error!</p>;
  }
  return (
    <main>
      <ul className="article-list grid">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="grid__item">
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ArticleList;
