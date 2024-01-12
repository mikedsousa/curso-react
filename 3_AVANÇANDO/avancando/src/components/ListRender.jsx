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

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
