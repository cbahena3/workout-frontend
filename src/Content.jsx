/* eslint-disable no-unused-vars */
import axios from "axios";
import { ExerciseRoutinesIndex } from "./ExerciseRoutinesIndex";
import { ExerciseRoutinesNew } from "./ExerciseRoutinesNew";
import { ExerciseRoutinesModal } from "./ExerciseRoutinesModal";
import { ExerciseRoutinesShow } from "./ExerciseRoutinesShow";
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
import { RoutinesIndex } from "./RoutinesIndex";
import { RoutinesNew } from "./RoutinesNew";
import { RoutinesModal } from "./RoutinesModal";
import { RoutinesShow } from "./RoutinesShow";
import { ArmsIndex } from "./ArmsIndex";

export function Content() {
  const [users, setUsers] = useState([]);
  const [isUsersShowVisible, setIsUsersShowVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [exercises, setExercises] = useState([]);
  const [isExercisesShowVisible, setIsExercisesShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({});

  const [muscles, setMuscles] = useState([]);
  const [exerciseRoutines, setExerciseRoutines] = useState([]);

  const [exerciseRoutineVisible, setExerciseRoutineVisible] = useState(false);
  const [currentExerciseRoutine, setCurrentExerciseRoutine] = useState({});

  const [routines, setRoutines] = useState([]);

  const [routinesVisible, setRoutinesVisible] = useState(false);
  const [currentRoutine, setCurrentRoutine] = useState({});

  const handleIndexRoutines = () =>{
    // console.log(handleIndexRoutines);
    axios.get("/routines.json").then((response)=>{
      console.log(response.data);
      setRoutines(response.data);
    })
  };
  
  const handleIndexExercises = () => {
    // console.log("running handleIndexExercise");
    axios.get("/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  const handleIndexUsers = () => {
    // console.log("handleIndexUsers");
    axios.get("/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  const handleIndexMuscles = () => {
    // console.log("handleIndexMuscles");
    axios.get("/muscle_groups.json").then((response) => {
      console.log(response.data);
      setMuscles(response.data);
    });
  };
  const handleIndexExerciseRoutines = () => {
    // console.log("handleIndexMuscles");
    axios.get("/exercise_routines.json").then((response) => {
      console.log(response.data);
      setExerciseRoutines(response.data);
    });
  };



  const handleCreateRoutine = (params, successCallback) =>{
    // console.log("handleCreateRoutine", params);
    axios.post("/routines.json", params).then((response)=>{
      setRoutines([...routines, response.data]);
      successCallback();
    });
  };

  const handleCreateUser = (params, successCallback) => {
    // console.log("handleCreateUser", params);
    axios.post("/users.json", params).then((response) => {
      setUsers([...users, response.data]);
      successCallback();
    });
  };

  const handleCreateExercise = (params, successCallback) => {
    // console.log("handleCreateExercise", params);
    axios.post("/exercises.json", params).then((response) => {
      setUsers([...users, response.data]);
      successCallback();
    });
  };

  const handleCreateExerciseRoutine = (params, successCallback) => {
    // console.log("handleCreateExerciseRoutine", params);
    axios.post("/exercise_routines.json", params).then((response) => {
      setExerciseRoutines([...exerciseRoutines, response.data]);
      successCallback();
    });
  };

  const handleShowUser = (user) => {
    // console.log("handleShowUser", user);
    setIsUsersShowVisible(true);
    setCurrentUser(user);
  };
    
  const handleClose = () => {
    // console.log("handleClose");
    setIsUsersShowVisible(false);
  };

  const handleShowExercise = (exercise) => {
    // console.log("handleShowExcercise", exercise);
    setIsExercisesShowVisible(true);
    setCurrentExercise(exercise);
  };
    
  const handleCloseExercise = () => {
    // console.log("handleClose");
    setIsExercisesShowVisible(false);
  };

  const handleShowExcerciseRoutine = (excerciseRoutine) => {
    // console.log("handleShowExcerciseRoutine", excerciseRoutine);
    setExerciseRoutineVisible(true);
    setCurrentExerciseRoutine(excerciseRoutine);
  };
    
  const handleCloseExcerciseRoutine = () => {
    // console.log("handleCloseExcerciseRoutine");
    setExerciseRoutineVisible(false);
  };

  const handleShowRoutine = (routine) =>{
    // console.log("handleShowRoutine", routine);
    setRoutinesVisible(true);
    setCurrentRoutine(routine);
  };

  const handleCloseRoutine = () =>{
    // console.log("handleCloseRoutine");
    setRoutinesVisible(false);
  };

  const handleUpdateUser = (id, params, successCallback) => {
    // console.log("handleUpdateUser", params);
    axios.patch(`/users/${id}.json`, params).then((response) => {
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

  const handleUpdateRoutine = (id, params, successCallback) => {
    // console.log("handleUpdateRoutine");
    axios.patch(`/routines/${id}.json`, params).then((response)=>{
      setRoutines(
        routines.map((routine)=>{
          if(routine.id === response.data.id){
            return response.data;
          } else {
            return routine;
          }
        })
      )
      successCallback();
      handleCloseRoutine();
    })
  };

  const handleUpdateExercise = (id, params, successCallback) => {
    // console.log("handleUpdateExercise", params);
    axios.patch(`/exercises/${id}.json`, params).then((response) => {
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

  const handleUpdateExcerciseRoutine = (id, params, successCallback) => {
    // console.log("handleUpdateExcerciseRoutine", params);
    axios.patch(`/exercise_routines/${id}.json`, params).then((response) => {
      setExerciseRoutines(
        exerciseRoutines.map((exerciseRoutine) => {
          if (exerciseRoutine.id === response.data.id) {
            return response.data;
          } else {
            return exerciseRoutine;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };


  const handleDestroyUser = (user) => {
    // console.log("handleDestroyUser", user);
    // eslint-disable-next-line no-unused-vars
    axios.delete(`/users/${user.id}.json`).then((response) => {
      setUsers(users.filter((p) => p.id !== user.id));
      handleClose();
    });
  };
  const handleDestroyExercise = (exercise) => {
    // console.log("handleDestroyExercise", exercise);
    axios.delete(`/exercises/${exercise.id}.json`).then((response) => {
      setExercises(exercises.filter((p) => p.id !== exercise.id));
      handleClose();
    });
  };

  const handleDestroyExerciseRoutine = (exerciseRoutine) => {
    // console.log("handleDestroyExerciseRoutine", currentExerciseRoutine);
    axios.delete(`/exercise_routines/${currentExerciseRoutine.id}.json`).then((response) => {
      setExerciseRoutines(exerciseRoutines.filter((p) => p.id !== currentExerciseRoutine.id));
      handleCloseExcerciseRoutine();
    });
  };

  const handleDestroyRoutine = (routine) => {
    // console.log("handleDestroyRoutine", routine);
    axios.delete(`/routines/${routine.id}.json`).then((response) => {
      setRoutines(routines.filter((p) => p.id !== routine.id));
      handleCloseRoutine();
    })
  };



     useEffect(() => {
      handleIndexUsers();
      handleIndexExercises();
      handleIndexMuscles();
      handleIndexExerciseRoutines();
      handleIndexRoutines(); // Moved this useEffect call here
    }, []);
  return (
    <main>
      <Routes>
        <Route path="/signup" element = {<Signup />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/logout" element = {<Logout />} />
        <Route path="/users" element = {<UsersIndex users = {users} onShowUser = {handleShowUser}/>} />

        <Route path="/arms" element = {<ArmsIndex />} />

        <Route path="/new-exercises" element={<ExercisesNew onCreateExercise={handleCreateExercise} />} />
        <Route path="/exercises" element={<ExercisesIndex exercises={exercises} onShowExercise={handleShowExercise} />} />

        <Route path="/" element={<MuscleGroupsIndex muscles={muscles}/>} />

        <Route path="/new_exercise_routine" element={<ExerciseRoutinesNew onCreateExerciseRoutine ={handleCreateExerciseRoutine}/>} />
        <Route path="/exercise_routines" element={<ExerciseRoutinesIndex exerciseRoutines = {exerciseRoutines} onShowExerciseRoutine = {handleShowExcerciseRoutine}/>} />

        <Route path="/routines" element={<RoutinesIndex routines = {routines} onShowRoutine = {handleShowRoutine}/>}/>
        <Route path="/new_routines" element={<RoutinesNew onCreateRoutine = {handleCreateRoutine}/>}/>
      </Routes>
      {/* <UsersNew onCreateUser = {handleCreateUser}/> */}

      <Modal show={isUsersShowVisible} onClose = {handleClose}>
        <UsersShow user={currentUser} onUpdateUser = {handleUpdateUser} onDestroyUser = {handleDestroyUser}/>
      </Modal>

      <ExercisesModal show={isExercisesShowVisible} onCloseExercise={handleCloseExercise}>
        <ExercisesShow exercise={currentExercise} onUpdateExercise={handleUpdateExercise} onDestroyExercise={handleDestroyExercise}/>
      </ExercisesModal>
      
      <ExerciseRoutinesModal show = {exerciseRoutineVisible} onCloseExerciseRoutine={handleCloseExcerciseRoutine}>
        <ExerciseRoutinesShow currentExcerciseRoutine = {currentExerciseRoutine} onUpdateExerciseRoutine={handleUpdateExcerciseRoutine} onDestroyExerciseRoutine={handleDestroyExerciseRoutine}/>
      </ExerciseRoutinesModal>

      <RoutinesModal show = {routinesVisible} onCloseRoutine = {handleCloseRoutine} >
          <RoutinesShow routine = {currentRoutine} onUpdateRoutine = {handleUpdateRoutine} onDestroyRoutine = {handleDestroyRoutine} />
      </RoutinesModal>

    </main>
  )
}