export default function PurchaseControl({ onAdd, count }) {
  return (
    <div className="counter-section">
      <p>Кількість: {count}</p>
      {/* При кліку викликаємо функцію, яку отримали в пропсах */}
      <button onClick={onAdd} className="buy-button">
        Купити
      </button>
    </div>
  );
}