import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-menu">
          {/* Додаємо клас nav-link для стилізації */}
          <li><Link to="/" className="nav-link">Головна</Link></li>
          <li><Link to="/catalog" className="nav-link">Каталог</Link></li>
          <li><Link to="/about" className="nav-link">Про нас</Link></li>
          {/* Новий пункт меню для лабораторної роботи */}
          <li><Link to="/contacts" className="nav-link">Контакти</Link></li>
        </ul>
      </nav>
    </header>
  );
}