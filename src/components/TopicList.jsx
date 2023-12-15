import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import ErrorHandling from './ErrorHandling';

function TopicList() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(false);
  useEffect(() => {
    getTopics()
      .then((data) => {
        setTopics(data);
        setLoading(false);
      })
      .catch((error) => {
        setErrMsg(error.response?.data || 'Error');
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (errMsg) {
    return <ErrorHandling errMsg={errMsg} />;
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

export default TopicList;
