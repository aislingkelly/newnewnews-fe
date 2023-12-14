import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { FaCalendar } from 'react-icons/fa6';
import { FaComment } from 'react-icons/fa6';
import { FaArrowDownUpAcrossLine } from 'react-icons/fa6';
import DeleteCommentButton from './DeleteComment';

function CommentCard({ comment, setComments }) {
  const { user } = useContext(UserContext);
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
        <FaComment /> {comment.author} <FaCalendar /> {publishedAt}{' '}
        <FaArrowDownUpAcrossLine />
        {comment.votes}
      </small>

      {comment.author === user ? (
        <DeleteCommentButton comment={comment} setComments={setComments} />
      ) : null}
    </div>
  );
}

export default CommentCard;
