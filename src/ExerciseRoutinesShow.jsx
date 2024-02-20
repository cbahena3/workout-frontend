/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

export function ExerciseRoutinesShow(props) {
  const [exercises, setExercises] = useState([]);
  const [routines, setRoutines] = useState([]);

  const handleSubmit=(event)=>{
    event.preventDefault();
      const params = new FormData(event.target);
      props.onUpdateExerciseRoutine(props.currentExcerciseRoutine.id, params, () => event.target.reset());
      // window.location="/"
  };

  const handleClick = () => {
    props.onDestroyExerciseRoutine(props.currentExerciseRoutine);
  };

  const getExercise = () => {
    axios.get("/exercises.json").then((response) => {
    console.log(response.data);
    setExercises(response.data);
    })
  }
  const getRoutine = () => {
    axios.get("/routines.json").then((response) => {
    console.log(response.data);
    setRoutines(response.data);
    })
  };

  useEffect(getExercise, []);
  useEffect(getRoutine,[])

  return(
    <div className="modal-body border border-primary-subtle">
      <h1>Exercise Routine information</h1>
      <h2>Exercise: {props.currentExcerciseRoutine.name}</h2>
      <p> Routine: {props.currentExcerciseRoutine.routine_name} </p>
      <p>Sets: {props.currentExcerciseRoutine.sets}</p>
      <p>Reps: {props.currentExcerciseRoutine.reps}</p>
      <form className="row g-3" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="exercise" className="form-label">Choose an Exercise:</label>
        <select className="form-select" name="exercise" id="exercise" >
          {exercises.map((exercise) => (             
            <option key={exercise.name}>{exercise.name}</option>
          ))};
        </select>
      </div>
      <div>
        <label htmlFor="routine" className="form-label">Choose a routine</label>
        <select className="form-select" name="routine" id="routine">
          {routines.map((routine) => (
            <option key={routine.id}>{routine.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sets" className="form-label">Sets:</label>
        <input defaultValue={props.currentExcerciseRoutine.sets} name="sets" type="text" className="form-control" id="sets"/>
      </div>
      <div>
        <label htmlFor="reps" className="form-label">Reps:</label>
        <input defaultValue={props.currentExcerciseRoutine.reps} name="reps" type="text" className="form-control" id="reps"/>
      </div>
        <button type="submit" className="d-grid gap-2 col-6 mx-auto btn btn btn-primary" >Save Changes</button>
      </form>
      <br />
        <button className="d-grid gap-2 col-6 mx-auto btn btn-secondary" onClick={handleClick}>Remove Exercise From Routine</button>
    </div>
  );
}