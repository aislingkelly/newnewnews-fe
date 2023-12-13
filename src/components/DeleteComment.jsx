import { useState, useEffect } from 'react';
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
        setTimeout(() => {
          setError(false);
        }, 2000);
      });
  };

  if (loading) {
    return <p>working on it...</p>;
  }

  if (error) {
    return <p>There's an issue with your comment. Please try again.</p>;
  }

  return (
    <>
      <button onClick={() => handleDeleteClick(comment.comment_id)}>
        Delete Comment?
      </button>
    </>
  );
}

export default DeleteCommentButton;
