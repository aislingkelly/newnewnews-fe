import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import { FaUserAstronaut, FaUserSecret } from 'react-icons/fa6';

function UserLogin() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user === '' ? (
        <Link to="/users" className="login-link">
          <p className="user-icon">
            <FaUserSecret />
            Log in here
          </p>
        </Link>
      ) : (
        <Link to="/users">
          <p className="user-icon">
            <FaUserAstronaut /> {user}
          </p>
        </Link>
      )}
    </>
  );
}

export default UserLogin;
