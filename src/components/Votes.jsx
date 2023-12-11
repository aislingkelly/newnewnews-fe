import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Votes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { article_id } = useParams();
  const increaseVotes = (article_id) => {
    patchKudos(username).catch((err) => {
      setError(true);
    });
  };
  if (loading) {
    return <p>loading!</p>;
  }
  if (error) {
    return <p>error!</p>;
  }
  return (
    <>
      <p>Votes: ????? </p>
      <button onClick={() => increaseVotes(article_id)}>Upvote: ☝️</button>
    </>
  );
}

export default Votes;
