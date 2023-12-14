import { useState } from 'react';
import { patchArticle } from '../utils/api';
import {
  FaRegHandPointUp,
  FaRegHandPointDown,
  FaRegHandPointRight,
} from 'react-icons/fa6';

function ArticleVoting({ article_id, initialVotes }) {
  const [error, setError] = useState(false);
  const [upvoteIsDisabled, setUpvoteIsDisabled] = useState(false);
  const [downvoteIsDisabled, setDownvoteIsDisabled] = useState(false);
  const [votes, setVotes] = useState(initialVotes);

  const changeArticleVotes = (article_id, newVote, voteReceived) => {
    setVotes(votes + newVote);
    patchArticle(article_id, newVote).catch((err) => {
      setError(true);
      setVotes(votes);
    });

    if (voteReceived === 'upvote') {
      setUpvoteIsDisabled(!downvoteIsDisabled);
      setDownvoteIsDisabled(false);
    } else if (voteReceived === 'downvote') {
      setDownvoteIsDisabled(!upvoteIsDisabled);
      setUpvoteIsDisabled(false);
    }
  };

  return (
    <>
      <p>
        <FaRegHandPointRight /> {votes}
      </p>
      <button
        onClick={() => changeArticleVotes(article_id, 1, 'upvote')}
        disabled={upvoteIsDisabled}
      >
        Upvote <FaRegHandPointUp />
      </button>
      <button
        onClick={() => changeArticleVotes(article_id, -1, 'downvote')}
        disabled={downvoteIsDisabled}
      >
        Downvote <FaRegHandPointDown />
      </button>
      {error ? <p>There's a problem with your vote. Try again</p> : null}
    </>
  );
}

export default ArticleVoting;
