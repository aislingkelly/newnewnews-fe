import { useState } from 'react';
import { postComment } from '../utils/api';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
function CommentPosting({ article_id, setComments }) {
  const { user } = useContext(UserContext);
  const [error, setError] = useState(false);
  const [input, setInput] = useState({ username: user, body: '' });
  const [validateMsg, setValidateMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const updateInput = (e) => {
    if (input.body.length < 20) {
      setValidateMsg(true);
    } else {
      setValidateMsg(false);
    }
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = (e) => {
    if (input.body.length < 20) {
      setValidateMsg(true);
      e.preventDefault();
    } else {
      setLoading(true);
      setValidateMsg(false);
      e.preventDefault();
      postComment(input, article_id)
        .then((response) => {
          setInput({ username: user, body: '' });
          setComments((currComments) => {
            return [response, ...currComments];
          });
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 2000);
        });
    }
  };

  if (error) {
    return <p>There's an issue with your comment. Please try again.</p>;
  }
  if (loading) {
    return <p>Working on it...</p>;
  }
  return (
    <>
      <h4>Post a comment</h4>
      <p>Commenting as {user}</p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment-username-input">Username: </label>
          <input
            type="text"
            placeholder="Username"
            id="comment-username-input"
            onChange={updateInput}
            value={input.username}
            name="username"
            disabled
          />

          <label htmlFor="comment-body-input">Your comment: </label>
          <textarea
            placeholder="Your comment"
            id="comment-body-input"
            onChange={updateInput}
            value={input.body}
            name="body"
          />
          <p>
            {' '}
            {validateMsg ? 'Your comment must be 20 characters or more' : null}
          </p>

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default CommentPosting;

// {
//   "item_name": "Test item",
//   "description": "testy mc test face",
//   "img_url": "https://test.com/Test-item.jpg",
//   "price": 100,
//   "category_name": "Relics"
// }
