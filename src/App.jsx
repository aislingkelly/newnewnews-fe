import Article from './components/Article';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import Header from './components/Header';
import ErrorHandling from './components/ErrorHandling';

import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div className="app-container">
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="*" element={<ErrorHandling errMsg="" />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
