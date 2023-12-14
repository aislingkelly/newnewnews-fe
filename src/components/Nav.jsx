import Topics from './Topics';

function Nav() {
  return (
    <div className="topics">
      <p className="nav-question">What do you want to read about today?</p>
      <nav>
        <Topics />
      </nav>
    </div>
  );
}

export default Nav;
