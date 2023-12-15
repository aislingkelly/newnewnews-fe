import { useState } from 'react';
import { deleteComment } from '../utils/api';
import { FaRegTrashCan } from 'react-icons/fa6';

import ErrorHandling from './ErrorHandling';
import Loading from './Loading';

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
        setLoading(false);
        console.log(error.message);
        setErrMsg(error.message || 'Error');
      });
  };

  return (
    <>
      {errMsg ? (
        <ErrorHandling errMsg={errMsg} />
      ) : (
        <>
          <button
            onClick={() => handleDeleteClick(comment.comment_id)}
            disabled={loading}
          >
            Delete <FaRegTrashCan />
          </button>
          {loading && <Loading />}
        </>
      )}
    </>
  );
}

export default CommentDeleting;
