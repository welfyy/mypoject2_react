import { useState } from 'react';

export default function BookCard({ data }) {
  // Створюємо стан для лічильника, початкове значення 0
  const [count, setCount] = useState(0);

  const handleBuy = () => {
    setCount(count + 1);
  };

  return (
    <div className="book-card" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '10px', width: '200px' }}>
      <img src={data.cover} alt={data.title} style={{ width: '100%' }} />
      <h3>{data.title}</h3>
      <p>Автор: {data.author}</p>
      <p>Ціна: <strong>{data.price} грн</strong></p>
      
      <div className="counter-section">
        <p>Кількість: {count}</p>
        <button onClick={handleBuy} className="buy-button">Купити</button>
      </div>
    </div>
  );
}