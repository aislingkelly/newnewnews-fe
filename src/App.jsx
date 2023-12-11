import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app-container">
      <h1>App</h1>
      <Header />
      <Nav />
      <ArticleList />
      <Footer />
    </div>
  );
}

export default App;
