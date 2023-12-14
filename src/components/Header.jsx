import { Link } from 'react-router-dom';
import Nav from './Nav';
import UserLogin from './UserLogin';

function Header() {
  return (
    <header>
      <div className="header-nav">
        <Link to="/">
          <h1>
            NEW<span className="no-shadow">S</span>
          </h1>
        </Link>{' '}
        <UserLogin />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
