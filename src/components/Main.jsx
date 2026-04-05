import BookCard from './BookCard'

const books = [
  { 
    id: 1, 
    title: "React для початківців", 
    author: "максим ієригін", 
    price: 450, 
    cover: "/book1.png" 
  },
  { 
    id: 2, 
    title: "JavaScript: Повний курс", 
    author: "Іван Костриця", 
    price: 600, 
    cover: "/book2.png" 
  },
  { 
    id: 3, 
    title: "Vite & Modern Tooling", 
    author: "Frontend Expert", 
    price: 380, 
    cover: "/book3.png" 
  }
];

export default function Main() {
  return (
    <main className="main-content">
      <h1>Наш каталог книг</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} data={book} />
        ))}
      </div>
    </main>
  );
}