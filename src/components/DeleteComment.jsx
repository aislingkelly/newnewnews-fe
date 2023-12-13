
import { useState } from 'react';

import { deleteComment } from '../utils/api';

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
        Delete Comment?
      </button>
      {loading ? <p>working on it...</p> : null}
      {error ? (
        <p>There's an issue deleting your comment. Please try again.</p>
      ) : null}

    </>
  );
}

export default DeleteCommentButton;
