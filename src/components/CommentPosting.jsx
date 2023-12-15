import { useState, useContext } from 'react';
import { postComment } from '../utils/api';
import { UserContext } from '../contexts/UserContext';
import { FaRegPaperPlane } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import ErrorHandling from './ErrorHandling';
import Loading from './Loading';

function CommentPosting({ article_id, setComments }) {
  const { user } = useContext(UserContext);
  const [input, setInput] = useState({ username: user, body: '' });
  const [validateMsg, setValidateMsg] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const updateInput = (e) => {
    input.body.length < 20 ? setValidateMsg(true) : setValidateMsg(false);
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.body.length < 20) {
      setValidateMsg(true);
    } else {
      setLoading(true);
      setErrMsg('');
      postComment(input, article_id)
        .then((response) => {
          setInput({ username: user, body: '' });
          setComments((currComments) => {
            return [response, ...currComments];
          });
          setLoading(false);
        })
        .catch((error) => {
          setErrMsg(error.response.data);
          setLoading(false);
        });
    }
  };

  return (
    <>
      {user ? (
        <>
          <h5>Commenting as {user}</h5>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="comment-username-input" className="hidden">
                Username:
                <input
                  type="text"
                  placeholder="Username"
                  id="comment-username-input"
                  onChange={updateInput}
                  value={input.username}
                  name="username"
                  disabled
                />
              </label>

              <label htmlFor="comment-body-input" className="hidden">
                Your comment:
              </label>
              <textarea
                placeholder="Your comment"
                id="comment-body-input"
                onChange={updateInput}
                value={input.body}
                name="body"
              />

              <button disabled={validateMsg || loading}>
                Comment <FaRegPaperPlane />
              </button>
            </form>
            {validateMsg && <p>Your comment must be at least 20 characters</p>}
            {loading && <Loading />}
            {errMsg && <ErrorHandling errMsg={errMsg} />}
          </div>{' '}
        </>
      ) : (
        <p>
          <Link to={`/users`}>Log in to comment</Link>
        </p>
      )}
    </>
  );
}

export default CommentPosting;
