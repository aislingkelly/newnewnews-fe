import TopicList from './TopicList';

function Nav() {
  return (
    <div className="topics">
      <p className="nav-question">What do you want to explore today?</p>
      <nav>
        <TopicList />
      </nav>
    </div>
  );
}

export default Nav;
