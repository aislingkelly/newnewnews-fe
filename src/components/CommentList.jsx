import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from '../utils/api';
import CommentCard from './CommentCard';
import CommentPosting from './CommentPosting';
import ErrorHandling from './ErrorHandling';

function CommentList() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setError(false);
    getComments(article_id)
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
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
    <section className="comments-section">
      <h3>Comments</h3>
      <CommentPosting article_id={article_id} setComments={setComments} />
      <ul className="comment-list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} setComments={setComments} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CommentList;
