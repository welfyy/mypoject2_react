import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Додаємо цей імпорт
import PurchaseControl from './PurchaseControl';

export default function BookCard({ data, isPromo }) {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem(`book-count-${data.id}`);
    return savedCount ? parseInt(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`book-count-${data.id}`, count);
  }, [count, data.id]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className={`book-card ${isPromo ? 'promo-border' : ''}`}>
      <img src={data.cover} alt={data.title} />
      <h3>{data.title}</h3>
      <p>Автор: {data.author}</p>
      <p>Ціна: <strong>{data.price} грн</strong></p>
      
      {/* ЗАВДАННЯ: Додаємо посилання на динамічний маршрут */}
      <Link 
        to={`/book/${data.id}`} 
        className="details-link"
        style={{
          display: 'block',
          marginBottom: '15px',
          color: '#3498db',
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}
      >
        Детальніше про книгу →
      </Link>
      
      <PurchaseControl count={count} onAdd={handleIncrement} />
    </div>
  );
}