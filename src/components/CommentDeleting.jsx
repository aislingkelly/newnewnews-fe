import { useState } from 'react';
import { deleteComment } from '../utils/api';
import { FaRegTrashCan } from 'react-icons/fa6';

import ErrorHandling from './ErrorHandling';

function CommentDeleting({ comment, setComments }) {
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDeleteClick = (comment_id) => {
    setErrMsg('');
    setLoading(true);
    deleteComment(comment_id)
      .then(() => {
        setComments((currComments) => {
          return currComments.filter(
            (comment) => comment.comment_id !== comment_id
          );
        });
        setLoading(false);
      })
      .catch((error) => {
        setErrMsg(error.response.data);
        setLoading(false);
      });
  };

  if (errMsg) {
    return <ErrorHandling errMsg={errMsg} />;
  }

  return (
    <>
      <button
        onClick={() => handleDeleteClick(comment.comment_id)}
        disabled={loading}
      >
        Delete <FaRegTrashCan />
      </button>
      {loading ? <p>working on it...</p> : null}
    </>
  );
}

export default CommentDeleting;
