import BookCard from "./BookCard";

function BookList({ books, setSelectedBookId, setBooks }) {
  return (
    <section>
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            book={book}
            setSelectedBookId={setSelectedBookId}
            setBooks={setBooks}
          />
        );
      })}
    </section>
  );
}
export default BookList;
