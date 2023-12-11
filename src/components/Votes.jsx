import { useState } from 'react';
import { patchArticle } from '../utils/api';

function Votes({ article_id, initialVotes }) {
  const [upvoteIsDisabled, setUpvoteIsDisabled] = useState(false);
  const [downvoteIsDisabled, setDownvoteIsDisabled] = useState(false);
  const [votes, setVotes] = useState(initialVotes);

  const changeArticleVotes = (article_id, newVote, voteReceived) => {
    patchArticle(article_id, newVote).catch((err) => {
      setError(true);
      setVotes(votes);
    });
    setVotes(votes + newVote);
    if (voteReceived === 'upvote') {
      setUpvoteIsDisabled(true);
      setDownvoteIsDisabled(false);
    } else if (voteReceived === 'downvote') {
      setUpvoteIsDisabled(false);
      setDownvoteIsDisabled(true);
    }
  };

  return (
    <>
      <p>Votes: {votes}</p>
      <button
        onClick={() => changeArticleVotes(article_id, 1, 'upvote')}
        disabled={upvoteIsDisabled}
      >
        Upvote: ☝️
      </button>
      <button
        onClick={() => changeArticleVotes(article_id, -1, 'downvote')}
        disabled={downvoteIsDisabled}
      >
        Downvote: 👇
      </button>
    </>
  );
}

export default Votes;
