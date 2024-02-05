import { UsersIndex } from "./UsersIndex"
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [users, setUsers] = useState([]);

  const handleIndexUsers = () => {
    console.log("handleIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  useEffect(handleIndexUsers, []);
  return (
    <main>
      <UsersIndex users = {users}/>
    </main>
  )
}