import { useState } from 'react';

import { deleteComment } from '../utils/api';
import { FaTrashCan } from 'react-icons/fa6';

function DeleteCommentButton({ comment, setComments }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDeleteClick = (comment_id) => {
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
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <>
      <button
        onClick={() => handleDeleteClick(comment.comment_id)}
        disabled={loading}
      >
        Delete <FaTrashCan />
      </button>
      {loading ? <p>working on it...</p> : null}
      {error ? (
        <p>There's an issue deleting your comment. Please try again.</p>
      ) : null}

    </>
  );
}

export default DeleteCommentButton;
