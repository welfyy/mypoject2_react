import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import BookDetails from './pages/BookDetails';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <Routes>
          {/* Головна сторінка (можна додати опис або банер) */}
          <Route path="/" element={<HomePage />} />
          
          {/* Сторінка з каталогом (твій колишній Main) */}
          <Route path="/catalog" element={<CatalogPage />} />
          
          {/* Динамічна сторінка книги */}
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;