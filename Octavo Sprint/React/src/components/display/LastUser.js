import { useEffect, useState } from "react";
import UsersItem from "./UsersItem";

function LastUser() {
  const [isLoading, setIsLoading] = useState(true);

  const [users, setUsers] = useState([]);

  let lastUser = [];

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/api/usuarios")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setUsers(data.users);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  lastUser = users.pop();

  return (
    <div>
      <h2>Last User</h2>
      <UsersItem
        key={lastUser.id}
        id={lastUser.id}
        name={lastUser.name}
        email={lastUser.email}
        detail={"/usuarios/" + lastUser.id}
      />
    </div>
  );
}
export default LastUser;
