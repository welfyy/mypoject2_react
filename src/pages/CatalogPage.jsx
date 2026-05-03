import { useState, useEffect } from 'react';
import axios from 'axios'; // Додано для запитів
import BookCard from '../components/BookCard';
import Spinner from '../components/Spinner';

// Старий локальний масив можна залишити як коментар або видалити, 
// бо тепер дані будуть приходити з бази

export default function CatalogPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState([]); // Стан для рейсів (книг)
  const [categories, setCategories] = useState([]); // Стан для категорій
  const [selectedCategory, setSelectedCategory] = useState(''); // Обрана категорія

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Отримуємо дані з твого Laravel API
        const tripsRes = await axios.get('http://127.0.0.1:8000/api/trips');
        const catsRes = await axios.get('http://127.0.0.1:8000/api/categories');
        
        setTrips(tripsRes.data);
        setCategories(catsRes.data);
      } catch (error) {
        console.error("Помилка завантаження даних:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Логіка фільтрації на фронтенді
  const filteredTrips = selectedCategory 
    ? trips.filter(trip => trip.category_id == selectedCategory)
    : trips;

  if (isLoading) return <Spinner />;

  return (
    <div className="main-content">
      <h1>Каталог</h1>

      {/* Блок фільтрації */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <select 
          onChange={(e) => setSelectedCategory(e.target.value)} 
          value={selectedCategory}
          style={{ padding: '8px', borderRadius: '5px' }}
        >
          <option value="">Всі категорії</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div className="book-list">
        {filteredTrips.map((trip) => (
          <BookCard key={trip.id} data={trip} isPromo={trip.id === 1} />
        ))}
      </div>
    </div>
  );
}