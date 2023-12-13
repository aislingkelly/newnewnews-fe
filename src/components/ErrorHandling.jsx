import { Link } from 'react-router-dom';
import Topics from './Topics';

function ErrorHandling({ errMsg }) {
  if (errMsg.msg === 'path not found') {
    return (
      <>
        <p>
          Hmmm...something's gone wrong here. Looks like you've not found
          something that doesn't exist. Confused? Me too.
        </p>

        <p>
          Why don't you try going <Link to="/">home</Link>
          ...
        </p>
      </>
    );
  }
  if (errMsg.msg === 'not a valid topic') {
    return (
      <>
        <p>That's not a valid topic...</p>
        <p>Did you mean:</p>
        <Topics />
      </>
    );
  }

  if (errMsg.msg === 'article does not exist') {
    return (
      <>
        <p>We can't seem to find that article! But we do have plenty more. </p>
        <p>
          You can start again from the <Link to="/">home page</Link>.
        </p>
      </>
    );
  }

  if (errMsg.msg === 'bad request') {
    return (
      <>
        <p>
          You're caught in a bad request which is almost as bad as being caught
          in a bad romance.{' '}
        </p>
        <p>But not quite because it's slightly easier to get out of.</p>{' '}
        <p>
          Try going <Link to="/">home</Link>.
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        It looks like you've managed to break something we didn't anticipate.
      </p>
      <p>Well done!</p>
      <p>
        You can always go <Link to="/">home</Link>
        ...
      </p>
    </>
  );
}

export default ErrorHandling;
