import { useState } from 'react';
import { patchArticle } from '../utils/api';
import { FaArrowTurnUp } from 'react-icons/fa6';
import { FaArrowTurnDown } from 'react-icons/fa6';
import { FaArrowDownUpAcrossLine } from 'react-icons/fa6';

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

  if (error) {
    return <p>There's a problem with your vote</p>;
  }
  return (
    <>
      <p>
        <FaArrowDownUpAcrossLine /> {votes}
      </p>
      <button
        onClick={() => changeArticleVotes(article_id, 1, 'upvote')}
        disabled={upvoteIsDisabled}
      >
        Upvote: <FaArrowTurnUp />
      </button>
      <button
        onClick={() => changeArticleVotes(article_id, -1, 'downvote')}
        disabled={downvoteIsDisabled}
      >
        Downvote: <FaArrowTurnDown />
      </button>
    </>
  );
}

export default ArticleVoting;
