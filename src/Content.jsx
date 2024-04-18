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

  const [arms, setArms] = useState();

  const handleIndexArms = () => {
    axios.get("/arms.json").then((response) => {
      setArms(response.data);
    })
  }


  const handleIndexRoutines = () =>{
    axios.get("/routines.json").then((response)=>{
      setRoutines(response.data);
    })
  };
  
  const handleIndexExercises = () => {
    axios.get("/exercises.json").then((response) => {
      setExercises(response.data);
    });
  };

  const handleIndexUsers = () => {
    axios.get("/users.json").then((response) => {
      setUsers(response.data);
    });
  };

  const handleIndexMuscles = () => {
    axios.get("/muscle_groups.json").then((response) => {
      setMuscles(response.data);
    });
  };
  const handleIndexExerciseRoutines = () => {
    axios.get("/exercise_routines.json").then((response) => {
      setExerciseRoutines(response.data);
    });
  };



  const handleCreateRoutine = (params, successCallback) =>{
    axios.post("/routines.json", params).then((response)=>{
      setRoutines([...routines, response.data]);
      successCallback();
    });
  };

  const handleCreateUser = (params, successCallback) => {
    axios.post("/users.json", params).then((response) => {
      setUsers([...users, response.data]);
      successCallback();
    });
  };

  const handleCreateExercise = (params, successCallback) => {
    axios.post("/exercises.json", params).then((response) => {
      setUsers([...users, response.data]);
      successCallback();
    });
  };

  const handleCreateExerciseRoutine = (params, successCallback) => {
    axios.post("/exercise_routines.json", params).then((response) => {
      setExerciseRoutines([...exerciseRoutines, response.data]);
      successCallback();
    });
  };

  const handleShowUser = (user) => {
    setIsUsersShowVisible(true);
    setCurrentUser(user);
  };
    
  const handleClose = () => {
    setIsUsersShowVisible(false);
  };

  const handleShowExercise = (exercise) => {
    setIsExercisesShowVisible(true);
    setCurrentExercise(exercise);
  };
    
  const handleCloseExercise = () => {
    setIsExercisesShowVisible(false);
  };

  const handleShowExcerciseRoutine = (excerciseRoutine) => {
    setExerciseRoutineVisible(true);
    setCurrentExerciseRoutine(excerciseRoutine);
  };
    
  const handleCloseExcerciseRoutine = () => {
    setExerciseRoutineVisible(false);
  };

  const handleShowRoutine = (routine) =>{
    setRoutinesVisible(true);
    setCurrentRoutine(routine);
  };

  const handleCloseRoutine = () =>{
    setRoutinesVisible(false);
  };

  const handleUpdateUser = (id, params, successCallback) => {
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
    axios.delete(`/users/${user.id}.json`).then((response) => {
      setUsers(users.filter((p) => p.id !== user.id));
      handleClose();
    });
  };
  const handleDestroyExercise = (exercise) => {
    axios.delete(`/exercises/${exercise.id}.json`).then((response) => {
      setExercises(exercises.filter((p) => p.id !== exercise.id));
      handleClose();
    });
  };

  const handleDestroyExerciseRoutine = (exerciseRoutine) => {
    axios.delete(`/exercise_routines/${currentExerciseRoutine.id}.json`).then((response) => {
      setExerciseRoutines(exerciseRoutines.filter((p) => p.id !== currentExerciseRoutine.id));
      handleCloseExcerciseRoutine();
    });
  };

  const handleDestroyRoutine = (routine) => {
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
      handleIndexRoutines();
      handleIndexArms()
    }, []);
  return (
    <main>
      <Routes>
        <Route path="/signup" element = {<Signup />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/logout" element = {<Logout />} />
        <Route path="/users" element = {<UsersIndex users = {users} onShowUser = {handleShowUser}/>} />

        <Route path="/arms" element = {<ArmsIndex arms = {arms} />} />

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