import Article from './components/Article';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
