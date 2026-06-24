import { useState, useEffect } from "react";
import "./App.css";
import { getBooks } from "./API/Books";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";
import RegisterForm from "./Components/RegisterForm";

// import AuthPanel from "./Components/AuthPanel";

function App() {
  //STATE VARIABLE

  //when app first loads it takes initial state
  const [books, setBooks] = useState([]);
  //loads twice
  //first load takes empty array above

  const [selectedBookId, setSelectedBookId] = useState(null);
  //selectedRecipe will update in RecipeList below
  //when triggered it will give us id for Recipe
  //get id to put inside recipie data

  //fetch everything and get on initial load only
  useEffect(() => {
    async function loadAllBooks() {
      const bookData = await getBooks();
      setBooks(bookData);
    }
    loadAllBooks();
  }, []);

  return (
    <main className="app">
      <header>
        <h1 className="page-header">Catalog</h1>
      </header>

      <RegisterForm />
      {selectedBookId ? (
        <BookDetails
          selectedBookId={selectedBookId}
          setSelectedBookId={setSelectedBookId}
        />
      ) : (
        <BookList
          books={books}
          setSelectedBookId={setSelectedBookId}
          setBooks={setBooks}
        />
      )}
    </main>
  );
}
export default App;

//Logic: {selectedBook ? <BookDetails /> : <BookList books={books} />}
// if selectedRecipe exists do RDetails, otherwise do RList
