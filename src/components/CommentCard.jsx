function CommentCard({ comment }) {
  let dateString = comment.created_at;
  let date = new Date(dateString);
  const publishedAt = new Intl.DateTimeFormat('default', {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    year: 'numeric',
    month: 'short',
  }).format(date);
  return (
    <div className="comment-card">
      <p>{comment.body}</p>
      <small>
        This comment was written by {comment.author} at {publishedAt} | Votes:{' '}
        {comment.votes}{' '}
      </small>
    </div>
  );
}

export default CommentCard;
