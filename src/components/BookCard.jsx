import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  // Виправлення шляху: використовуємо локальні картинки, якщо в базі немає посилань
  // Переконайся, що в папці public лежать файли book1.png, book2.png тощо
  const imageSrc = data.cover || `/book${(data.id % 3) + 1}.png`;

  return (
    <div className={`book-card ${isPromo ? 'promo-border' : ''}`}>
      <div className="book-image-container" style={{ height: '200px', overflow: 'hidden', background: '#f5f5f5' }}>
        <img 
          src={imageSrc} 
          alt={data.title || data.end_location} 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Підтримка полів логістики: звідки -> куди або заголовок */}
      <h3>
        {data.title || (data.start_location && data.end_location ? `${data.start_location} — ${data.end_location}` : data.destination) || `Рейс №${data.id}`}
      </h3>
      
      {/* Підтримка полів водія або автора */}
      <p>Водій/Автор: {data.author || data.driver || data.driver_name || "Максим Ієригін"}</p>
      
      {/* Підтримка різних назв ціни в БД */}
      <p>Ціна: <strong>{data.price || data.cost || "500"} грн</strong></p>
      
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
        Детальніше →
      </Link>
      
      <PurchaseControl count={count} onAdd={handleIncrement} />
    </div>
  );
}