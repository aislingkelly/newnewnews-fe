import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { FaUserAstronaut } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
  const { user } = useContext(UserContext);
  return (
    <header>
      <Link to="/">
        <h1>NC News</h1>
      </Link>

      <p>
        <FaUserAstronaut /> {user}
      </p>
      <Nav />
    </header>
  );
}

export default Header;
