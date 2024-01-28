// 4 - Renderização de listas

import { useState } from "react";
const ListRender = () => {
  const [list] = useState(["Matheus", "João", "Pedro", "Paulo"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 20 },
    { id: 2, name: "João", age: 21 },
    { id: 3, name: "Pedro", age: 25 },
    { id: 4, name: "Paulo", age: 34 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      {/* 6 - Previous State */}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
