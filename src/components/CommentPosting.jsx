import { useState } from 'react';
import { postComment } from '../utils/api';

function CommentPosting({ article_id, setComments }) {
  const [error, setError] = useState(false);
  const [input, setInput] = useState({ username: '', body: '' });

  const updateInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(input, article_id)
      .then((response) => {
        setInput({ username: '', body: '' });
        setComments((currComments) => {
          return [response, ...currComments];
        });
      })
      .catch((error) => {
        setError(true);
      });
  };

  if (error) {
    return <p>There's an issue with your comment. Please try again.</p>;
  }
  return (
    <>
      <h4>Post a comment</h4>
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
          />
          <label htmlFor="comment-body-input">Your comment: </label>
          <textarea
            placeholder="Your comment"
            id="comment-body-input"
            onChange={updateInput}
            value={input.body}
            name="body"
          />

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
