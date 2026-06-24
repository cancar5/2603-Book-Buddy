import { useAuth } from "../context/AuthContext";
import RegisterForm from "./RegisterForm";

function AuthPanel() {
  const { token, user, authMessage, authError, logout, checkAuth } = useAuth();

  return (
    <section className="auth-panel">
      <h2>Auth Panel</h2>
      {!token ? (
        <RegisterForm />
      ) : (
        <div className="auth-card">
          <p>You have a token</p>

          <button onClick={checkAuth}>Authenticate Token</button>
          <button onClick={logout}>Logout</button>

          {user && <p>Logged in as: {user.username}</p>}
        </div>
      )}
      {authMessage && <p className="success-message">{authMessage}</p>}
    </section>
  );
}
export default AuthPanel;
