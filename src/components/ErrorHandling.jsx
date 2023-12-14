import { Link } from 'react-router-dom';

import Topics from './Topics';

function ErrorHandling({ errMsg }) {
  if (errMsg.msg === 'Not logged in') {
    return (
      <section className="errors">
        <p>Hmmmm, that's not working. Are you sure you're logged in?</p>
      </section>
    );
  }
  if (errMsg.msg === 'path not found') {
    return (
      <section className="errors">
        <p>
          Hmmm...something's gone wrong here. Looks like you've not found
          something that doesn't exist. Confused? Me too.
        </p>

        <p>
          Why don't you try going <Link to="/">home</Link>
          ...
        </p>
      </section>
    );
  }
  if (errMsg.msg === 'not a valid topic') {
    return (
      <section className="errors">
        <p>That's not a valid topic...</p>
        <p>Did you mean:</p>
        <Topics />
      </section>
    );
  }

  if (errMsg.msg === 'article does not exist') {
    return (
      <section className="errors">
        <p>We can't seem to find that article! But we do have plenty more. </p>
        <p>
          You can start again from the <Link to="/">home page</Link>.
        </p>
      </section>
    );
  }

  if (errMsg.msg === 'bad request') {
    return (
      <section className="errors">
        <p>
          You're caught in a bad request which is almost as bad as being caught
          in a bad romance.{' '}
        </p>
        <p>But not quite because it's slightly easier to get out of.</p>{' '}
        <p>
          Try going <Link to="/">home</Link>.
        </p>
      </section>
    );
  }

  return (
    <section className="errors">
      <p>
        It looks like you've managed to break something we didn't anticipate.
      </p>
      <p>Well done!</p>
      <p>
        You can always go <Link to="/">home</Link>
        ...
      </p>
    </section>
  );
}

export default ErrorHandling;
