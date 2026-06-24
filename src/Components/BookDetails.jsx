import { useState, useEffect } from "react";
import { getSingleBook } from "../API/Books";

function BookDetails({ selectedBookId, setSelectedBookId }) {
  //pull out selectedBookId

  //create state
  const [book, setBook] = useState(null); //populate new individual recipe

  //utilize useEffect
  //need useEffect to change everytime selectedId or recipe changes
  //fetching single item, but needs dependency array
  useEffect(() => {
    async function loadSingleBook() {
      const bookData = await getSingleBook(selectedBookId);
      setBook(bookData);
    }
    loadSingleBook();
  }, [selectedBookId]); //dependency array
  //using this one because this is the one that's changing

  //get an error
  if (!book) {
    return <p>Loading Books...</p>;
  } //when page is loading, it will show p tag
  //when data ready it will display single book

  const handleBack = () => {
    setSelectedBookId(null);
  }; //sets back to null so when you go back

  return (
    <section className="book-details">
      <img src={book.coverimage} alt={book.title} />
      <div className="book-details-content">
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>{book.description}</p>
        <button onClick={handleBack}>Back to book list.</button>
      </div>
    </section>
  );
}
export default BookDetails;
