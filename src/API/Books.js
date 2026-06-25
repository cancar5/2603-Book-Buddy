const BASE = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
const API = BASE;

//GET ALL BOOKS
export async function getBooks() {
  try {
    const response = await fetch(`${API}/books`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error fetching books /GET", error);
  }
}

//GET INDIVIDUAL BOOKS
export async function getSingleBook(id) {
  try {
    const response = await fetch(`${API}/books/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error /GET single recipe", error);
  }
}

//Fetching register
export async function register(credentials) {
  try {
    const response = await fetch(`${API}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    return result.token;
  } catch (error) {
    console.error("There was an error /register", error);
  }
}

//fetching login
export async function login(credentials) {
  try {
    const response = await fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    return result.token;
  } catch (error) {
    console.error("There was an error /login", error);
  }
}

//get user details
export async function getCurrentUser(token) {
  try {
    const response = await fetch(`${API}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

//get reservations
export async function getReservations(token) {
  try {
    const response = await fetch(`${API}/reservations`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result.reservations;
  } catch (error) {
    console.error("There was an error fetching books /GET", error);
  }
}

//Reserve a book
export async function reserveBook(bookId, token) {
  try {
    const response = await fetch(`${API}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ bookId }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error reserving a book", error);
  }
}

//authenticate user
export async function authenticate(token) {
  try {
    const response = await fetch(`${API}/authenticate`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error /authenticate", error);
  }
}
