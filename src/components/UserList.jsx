import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { getUsers } from '../utils/api';

import ErrorHandling from './ErrorHandling';
import Loading from './Loading';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const { setUser } = useContext(UserContext);

  function handleUserClick(username) {
    setUser(username);
    setSelectedUser(username);
  }

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setErrMsg(error.response?.data || 'Error');
      });
  }, []);

  return loading ? (
    <Loading />
  ) : errMsg ? (
    <ErrorHandling errMsg={errMsg} />
  ) : (
    <main className="users">
      <h2>Choose your own adventure</h2>
      <p>
        There's no authentication on NewNewNews but you can interact as one of
        these users. Choose wisely...
      </p>
      <ul className="users-list">
        {users.map((user) => (
          <li
            key={user.username}
            onClick={() => handleUserClick(user.username)}
            className={selectedUser === user.username ? 'user-selected' : ''}
          >
            <h4>
              <small>
                {selectedUser === user.username ? 'Logged in as' : ''}
              </small>
              <br />
              {user.username}
            </h4>
            <p>
              <small>AKA: {user.name}</small>
            </p>
            <img src={user.avatar_url} alt={user.name} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default UserList;
