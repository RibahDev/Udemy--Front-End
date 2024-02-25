import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["João", "Pedro", "Victor"]);

  const [users, setUsers] = useState([
    {id: 1, name: "João", age: 23},
    {id: 2, name: "Gideão", age: 25},
    {id: 3, name: "Raul", age: 23}
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id) );
  };

  return (
    <div>
      {/* Render sem key */}
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
        {/* Render com key */}
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age} anos</li>
          ))}
        </ul>
        {/* 6 - Previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender