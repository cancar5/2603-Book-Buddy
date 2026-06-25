import { useAuth } from "../Context/AuthContext";

function Reservations(firstname, email) {
  const { user, reservations } = useAuth();

  //optional chaining. If the user exists, show their first name.
  // But if there is no user logged in, notthing
  return (
    <section>
      <h2>Welocome {user?.firstname}!</h2>
      <p>Your email on file with us is {email}</p>

      <h1>Your Reservations</h1>
      {reservations?.map((reservations) => (
        <li key={reservations.id}>
          <h3>{reservations.book?.title}</h3>
          <p>{reservations.book?.author}</p>
          <button>Return Book</button>
        </li>
      ))}
    </section>
  );
}
export default Reservations;
