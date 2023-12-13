import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';
import { useSearchParams } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import Sort from './Sort';

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get('topic');
  const [sortQuery, setSortQuery] = useState('comment_count');
  const [orderQuery, setOrderQuery] = useState('desc');

  useEffect(() => {
    setLoading(true);
    getArticles(topicQuery, sortQuery, orderQuery)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [topicQuery, sortQuery, orderQuery]);

  if (loading) {
    return <p>loading!</p>;
  }
  if (error) {
    return <p>error!</p>;
  }
  return (
    <main>
      <Sort
        setSortQuery={setSortQuery}
        sortQuery={sortQuery}
        setOrderQuery={setOrderQuery}
        orderQuery={orderQuery}
      />
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
