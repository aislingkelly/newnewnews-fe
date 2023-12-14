import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { FaRegCalendar, FaRegUser, FaRegHandPointRight } from 'react-icons/fa6';
import { formatDateString } from '../utils/utils';

import CommentDelete from './CommentDelete';

function CommentCard({ comment, setComments }) {
  const { user } = useContext(UserContext);
  const publishedAt = formatDateString(comment.created_at);

  return (
    <div className="comment-card">
      <small>
        <FaRegUser /> {comment.author}{' '}
      </small>
      <p>{comment.body}</p>
      <small>
        <FaRegCalendar /> {publishedAt} <FaRegHandPointRight />
        {comment.votes}
      </small>

      {comment.author === user ? (
        <CommentDelete comment={comment} setComments={setComments} />
      ) : null}
    </div>
  );
}

export default CommentCard;
