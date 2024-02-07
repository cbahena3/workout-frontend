/* eslint-disable no-unused-vars */
import axios from "axios";
import { ExerciseRoutinesIndex } from "./ExerciseRoutinesIndex";
import { ExerciseRoutinesNew } from "./ExerciseRoutinesNew";
import { Modal } from "./Modal";
import { UsersIndex } from "./UsersIndex"
import { UsersNew } from "./UsersNew";
import { UsersShow } from "./UsersShow";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Route, Routes } from "react-router-dom";
import { ExercisesIndex } from "./ExercisesIndex";
import { ExercisesModal } from "./ExercisesModal";
import { ExercisesNew } from "./ExercisesNew";
import { ExercisesShow } from "./ExercisesShow";
import { MuscleGroupsIndex } from "./MuscleGroupsIndex";

export function Content() {
  const [users, setUsers] = useState([]);
  const [isUsersShowVisible, setIsUsersShowVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [isExercisesShowVisible, setIsExercisesShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({});

  const [muscles, setMuscles] = useState([]);
  const [exerciseRoutines, setExerciseRoutines] = useState([]);

  const handleIndexUsers = () => {
    console.log("handleIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  const handleIndexMuscles = () => {
    console.log("handleIndexMuscles");
    axios.get("http://localhost:3000/muscle_groups.json").then((response) => {
      console.log(response.data);
      setMuscles(response.data);
    });
  };
  const handleIndexExerciseRoutines = () => {
    console.log("handleIndexMuscles");
    axios.get("http://localhost:3000/exercise_routines.json").then((response) => {
      console.log(response.data);
      setExerciseRoutines(response.data);
    });
  };


  const handleCreateUser = (params, successCallback) => {
    console.log("handleCreateUser", params);
    axios.post("http://localhost:3000/users.json", params).then((response) => {
      setUsers([...users, response.data]);
      successCallback();
    });
  };

  const handleCreateExercise = (params, successCallback) => {
    console.log("handleCreateExercise", params);
    axios.post("http://localhost:3000/exercises.json", params).then((response) => {
      setUsers([...users, response.data]);
      successCallback();
    });
  };

  const handleCreateExerciseRoutine = (params, successCallback) => {
    console.log("handleCreateExerciseRoutine", params);
    axios.post("http://localhost:3000/exercise_routines.json", params).then((response) => {
      setExerciseRoutines([...exerciseRoutines, response.data]);
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

  const handleShowExercise = (exercise) => {
    console.log("handleShowExcercise", exercise);
    setIsExercisesShowVisible(true);
    setCurrentExercise(exercise);
  };
    
  const handleCloseExercise = () => {
    console.log("handleClose");
    setIsExercisesShowVisible(false);
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

  const handleUpdateExercise = (id, params, successCallback) => {
    console.log("handleUpdateExercise", params);
    axios.patch(`http://localhost:3000/exercises/${id}.json`, params).then((response) => {
      setExercises(
        exercises.map((exercise) => {
          if (exercise.id === response.data.id) {
            return response.data;
          } else {
            return exercise;
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
  const handleDestroyExercise = (exercise) => {
    console.log("handleDestroyExercise", exercise);
    axios.delete(`http://localhost:3000/exercises/${exercise.id}.json`).then((response) => {
      setExercises(exercises.filter((p) => p.id !== exercise.id));
      handleClose();
    });
  };

  const [exercises, setExercises] = useState([]);
  const handleIndexExercises = () => {
    console.log("running handleIndexExercise");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
         console.log(response.data);
         setExercises(response.data);
       });
     };
     useEffect(() => {
      handleIndexUsers();
      handleIndexExercises();
      handleIndexMuscles();
      handleIndexExerciseRoutines(); // Moved this useEffect call here
    }, []);
  return (
    <main>
      <ExerciseRoutinesNew onCreateExerciseRoutine ={handleCreateExerciseRoutine}/>
      <ExerciseRoutinesIndex exerciseRoutines = {exerciseRoutines}/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/users" element={<UsersIndex users = {users} onShowUser = {handleShowUser}/>} />

        <Route path="/new-exercises" element={<ExercisesNew onCreateExercise={handleCreateExercise} />} />
        <Route path="/exercises" element={<ExercisesIndex exercises={exercises} onShowExercise={handleShowExercise} />} />

        <Route path="/" element={<MuscleGroupsIndex muscles={muscles}/>} />
      </Routes>
      {/* <UsersNew onCreateUser = {handleCreateUser}/> */}
      <Modal show={isUsersShowVisible} onClose = {handleClose}>
        <UsersShow user={currentUser} onUpdateUser = {handleUpdateUser} onDestroyUser = {handleDestroyUser}/>
      </Modal>

      <ExercisesModal show={isExercisesShowVisible} onCloseExercise={handleCloseExercise}>
        <ExercisesShow exercise={currentExercise} onUpdateExercise={handleUpdateExercise} onDestroyExercise={handleDestroyExercise}/>
      </ExercisesModal>
    </main>
  )
}