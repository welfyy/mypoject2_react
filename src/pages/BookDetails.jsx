import { useParams, Link } from 'react-router-dom';

export default function BookDetails() {
  // Дістаємо id з URL (наприклад, якщо посилання /book/1, то id буде "1")
  const { id } = useParams();

  // В реальному житті ми б шукали книгу в масиві або робили запит до API
  // Для лаби просто виведемо назву за ID (імітація)
  const bookTitles = {
    "1": "React для початківців",
    "2": "JavaScript: Повний курс",
    "3": "Vite & Modern Tooling"
  };

  const title = bookTitles[id] || "Книгу не знайдено";

  return (
    <div className="main-content">
      <Link to="/catalog" style={{ color: '#61dafb' }}>← Назад до каталогу</Link>
      <div style={{ marginTop: '20px', padding: '20px', background: 'white', borderRadius: '8px' }}>
        <h2>Деталі книги: {title}</h2>
        <p>ID книги в базі даних: <strong>{id}</strong></p>
        <p>Тут буде розширений опис вашої курсової роботи...</p>
      </div>
    </div>
  );
}