function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p>{comment.body}</p>
      <small>
        This comment was written by {comment.author} at {comment.created_at} |
        Votes: {comment.votes}{' '}
      </small>
    </div>
  );
}

export default CommentCard;
