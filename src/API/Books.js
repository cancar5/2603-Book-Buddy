const BASE = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
const RESOURCE = "/books/";
const API = BASE + RESOURCE;

//GET ALL BOOKS
export async function getBooks() {
  try {
    const response = await fetch(API);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error fetching books /GET", error);
  }
}

//GET INDIVIDUAL BOOKS
export async function getSingleBook(id) {
  try {
    const response = await fetch(`${API}/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error /GET single recipe", error);
  }
}

//Fetching register
export async function register() {
  try {
    const response = await fetch(`${API}/users/register`, {
      method: "POST",
      header: { "Content=Type": "application/json" },
      body: JSON.stringify({
        firstname: "",
        lastname: "",
        username: "some-username",
        password: "super-secret-999",
      }),
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
      header: { "Content=Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    return result.token;
  } catch (error) {
    console.error("There was an error /register", error);
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
export async function getReservations() {
  try {
    const response = await fetch(`${API}/reservations`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error fetching books /GET", error);
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
