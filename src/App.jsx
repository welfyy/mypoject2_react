import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import BookDetails from './pages/BookDetails';
import ContactPage from './pages/ContactPage'; // 1. Додаємо імпорт нової сторінки

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <Routes>
          {/* Головна сторінка */}
          <Route path="/" element={<HomePage />} />
          
          {/* Сторінка з каталогом */}
          <Route path="/catalog" element={<CatalogPage />} />
          
          {/* Динамічна сторінка книги */}
          <Route path="/book/:id" element={<BookDetails />} />

          {/* 2. Додаємо маршрут для сторінки контактів */}
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;