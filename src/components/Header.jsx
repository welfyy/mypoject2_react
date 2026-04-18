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
        </ul>
      </nav>
    </header>
  );
}