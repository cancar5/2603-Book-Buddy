import { createContext, useContext, useState } from "react";
//CC allows us to use every method they created for us
import {
  register,
  login,
  getCurrentUser,
  authenticate,
  getReservations,
} from "../api/books";

const AuthContext = createContext();

//data shared inside Auth
export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [authMessage, setAuthMessage] = useState("");
  const [authError, setAuthError] = useState(null);
  const [reservations, setReservations] = useState([]);

  async function registerUser(credentials) {
    try {
      setAuthError(null); //if no error dont want error message to be seen
      setAuthMessage("");

      const newToken = await register(credentials);
      setToken(newToken);

      const userData = await getCurrentUser(newToken);
      setUser(userData);
      setAuthMessage("Account created!");
      if (!newToken) {
        setAuthError("Registration failed");
        return;
      }
    } catch (error) {
      throw error();
    }
  }

  //login
  async function userLogin(credentials) {
    try {
      setAuthError(null); //if no error dont want error message to be seen
      setAuthMessage("");
      setReservations([]);

      const newToken = await login(credentials);
      setToken(newToken);
      const userData = await getCurrentUser(newToken);
      setUser(userData);
      const reservationData = await getReservations(newToken);
      setReservations(reservationData.reservations);
      setAuthMessage("Logged in!");
    } catch (error) {
      setAuthError(error.message);
    }
  }

  //check authentication
  //if there's an error set back to default
  async function checkAuth() {
    setAuthError(null);
    const userData = await authenticate(token); //authenticate user
    setUser(userData); //store credentials here
    setAuthMessage("You are authenticated!"); //message given
    setAuthError("Error with authentication.");
  }

  //converting everything back to initial state
  function logout() {
    setToken(null);
    setUser(null);
    setReservations([]);
    setAuthMessage("You logged out.");
  }

  const value = {
    token,
    user,
    authMessage,
    authError,
    userLogin,
    logout,
    registerUser,
    checkAuth,
    reservations,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside the AuthProvider");
  }
  return context;
}
