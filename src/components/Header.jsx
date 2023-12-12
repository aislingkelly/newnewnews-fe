import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { FaUserAstronaut } from 'react-icons/fa';
import Nav from './Nav';

function Header() {
  const { user } = useContext(UserContext);
  return (
    <header>
      <h1>Welcome to NC News</h1>
      <p>
        <FaUserAstronaut /> {user}
      </p>
      <Nav />
    </header>
  );
}

export default Header;
