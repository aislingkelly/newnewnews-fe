import { useState } from 'react';
import { patchArticle } from '../utils/api';

function ArticleVoting({ article_id, initialVotes }) {
  const [upvoteIsDisabled, setUpvoteIsDisabled] = useState(false);
  const [downvoteIsDisabled, setDownvoteIsDisabled] = useState(false);
  const [votes, setVotes] = useState(initialVotes);

  const changeArticleVotes = (article_id, newVote, voteReceived) => {
    patchArticle(article_id, newVote).catch((err) => {
      setError(true);
      setVotes(votes);
    });
    setVotes(votes + newVote);

    // if both enabled, disable the click
    // if one disabled, enable that and disable the other

    if (!upvoteIsDisabled && !downvoteIsDisabled && voteReceived === 'upvote') {
      setUpvoteIsDisabled(true);
    } else if (
      !upvoteIsDisabled &&
      !downvoteIsDisabled &&
      voteReceived === 'downvote'
    ) {
      setDownvoteIsDisabled(true);
    } else if (upvoteIsDisabled && voteReceived === 'downvote') {
      setUpvoteIsDisabled(false);
    } else if (downvoteIsDisabled && voteReceived === 'upvote') {
      setDownvoteIsDisabled(false);
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

export default ArticleVoting;
