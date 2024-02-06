import axios from "axios";
import { Modal } from "./Modal";
import { UsersIndex } from "./UsersIndex"
import { UsersNew } from "./UsersNew";
import { UsersShow } from "./UsersShow";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Route, Routes } from "react-router-dom";

export function Content() {
  const [users, setUsers] = useState([]);
  const [isUsersShowVisible, setIsUsersShowVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});


  const handleIndexUsers = () => {
    console.log("handleIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  const handleCreateUser = (params, successCallback) => {
    console.log("handleCreateUser", params);
    axios.post("http://localhost:3000/users.json", params).then((response) => {
      setUsers([...users, response.data]);
      successCallback();
    });
  };

  const handleShowUser = (user) => {
    console.log("handleShowUser", user);
    setIsUsersShowVisible(true);
    setCurrentUser(user);
  };
    
  const handleClose = () => {
    console.log("handleClose");
    setIsUsersShowVisible(false);
  };

  const handleUpdateUser = (id, params, successCallback) => {
    console.log("handleUpdateUser", params);
    axios.patch(`http://localhost:3000/users/${id}.json`, params).then((response) => {
      setUsers(
        users.map((user) => {
          if (user.id === response.data.id) {
            return response.data;
          } else {
            return user;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };
  const handleDestroyUser = (user) => {
    console.log("handleDestroyUser", user);
    // eslint-disable-next-line no-unused-vars
    axios.delete(`http://localhost:3000/users/${user.id}.json`).then((response) => {
      setUsers(users.filter((p) => p.id !== user.id));
      handleClose();
    });
  };



  useEffect(handleIndexUsers, []);
  return (
    <main>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/users" element={<UsersIndex users = {users} onShowUser = {handleShowUser}/>} />
      </Routes>
      {/* <UsersNew onCreateUser = {handleCreateUser}/> */}
      <Modal show={isUsersShowVisible} onClose = {handleClose}>
        <UsersShow user={currentUser} onUpdateUser = {handleUpdateUser} onDestroyUser = {handleDestroyUser}/>
      </Modal>
    </main>
  )
}