import Article from './components/Article';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div className="app-container">
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
