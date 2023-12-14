import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { FaUserAstronaut } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
  const { user } = useContext(UserContext);
  return (
    <header>
      <div className="header-nav">
        <Link to="/">
          <h1>
            NEW<span class="no-shadow">S</span>
          </h1>
        </Link>{' '}
        <p class="user-icon">
          <FaUserAstronaut /> {user}
        </p>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
