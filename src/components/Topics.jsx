import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';
import { Link } from 'react-router-dom';
function Topics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    getTopics()
      .then((data) => {
        setTopics(data);
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
    return <p>Something went wrong here</p>;
  }
  return (
    <ul className="topic-list">
      {topics.map((topic) => {
        return (
          <li key={topic.slug}>
            <Link to={`/articles/?topic=${topic.slug}`}>{topic.slug}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Topics;
