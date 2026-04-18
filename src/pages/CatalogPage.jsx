import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import Spinner from '../components/Spinner';

const books = [
  { id: 1, title: "React для початківців", author: "максим ієригін", price: 450, cover: "/book1.png" },
  { id: 2, title: "JavaScript: Повний курс", author: "Іван Костриця", price: 600, cover: "/book2.png" },
  { id: 3, title: "Vite & Modern Tooling", author: "Frontend Expert", price: 380, cover: "/book3.png" }
];

export default function CatalogPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className="main-content">
      <h1>Каталог книг</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} data={book} isPromo={book.id === 1} />
        ))}
      </div>
    </div>
  );
}