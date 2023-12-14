import Topics from './Topics';

function Nav() {
  return (
    <div class="topics">
      <p class="nav-question">What do you want to read about today?</p>
      <nav>
        <Topics />
      </nav>
    </div>
  );
}

export default Nav;
