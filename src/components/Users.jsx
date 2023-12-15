import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { getUsers } from '../utils/api';

import ErrorHandling from './ErrorHandling';
import Loading from './Loading';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState('');
  const { user, setUser } = useContext(UserContext);

  function handleUserClick(username) {
    setUser(username);
  }
  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setErrMsg(error.response.data);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (errMsg) {
    return <ErrorHandling errMsg={errMsg} />;
  }
  return (
    <main className="users">
      <h2>Users</h2>
      <p>
        There is currently no authentication on NewNewNews. Please click a user
        below to interact as that user.
      </p>
      {user ? <h4>You're logged in as {user}</h4> : ''}
      <ul className="users-list">
        {users.map((user) => {
          return (
            <li
              key={user.username}
              onClick={() => {
                handleUserClick(user.username);
              }}
            >
              <p>
                Name: {user.name} <br />
                Username: {user.username}
              </p>
              <img src={user.avatar_url} alt={user.avatar_url} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Users;
