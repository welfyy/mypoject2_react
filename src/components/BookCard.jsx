import { useState, useEffect } from 'react';
import PurchaseControl from './PurchaseControl';

// Додаємо isPromo у пропси (деструктуризація)
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
    /* Додаємо умову: якщо isPromo true, додаємо клас 'promo-border' */
    <div className={`book-card ${isPromo ? 'promo-border' : ''}`}>
      <img src={data.cover} alt={data.title} />
      <h3>{data.title}</h3>
      <p>Автор: {data.author}</p>
      <p>Ціна: <strong>{data.price} грн</strong></p>
      
      <PurchaseControl count={count} onAdd={handleIncrement} />
    </div>
  );
}