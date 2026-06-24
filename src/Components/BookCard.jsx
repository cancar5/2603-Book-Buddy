function BookCard({ book, setSelectedBookId }) {
  return (
    <article className="book-card">
      <img src={book.coverimage} alt={book.title} />
      <div className="book-card-content">
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <button onClick={() => setSelectedBookId(book.id)}>
          See book details.
        </button>
      </div>
    </article>
  );
}
export default BookCard;
