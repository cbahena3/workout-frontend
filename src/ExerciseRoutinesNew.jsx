/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

export function ExerciseRoutinesNew(props) {
  const [exercises, setExercises] = useState([]);
  const [routines, setRoutines] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateExerciseRoutine(params, () => event.target.reset());
  };
  
  const getExercise = () => {
    axios.get("http://localhost:3000/exercises.json").then((response) => {
    console.log(response.data);
    setExercises(response.data);
    })
  }
  const getRoutine = () => {
    axios.get("http://localhost:3000/routines.json").then((response) => {
    console.log(response.data);
    setRoutines(response.data);
    })
  };

  useEffect(getExercise, []);
  useEffect(getRoutine,[])

  return(
    <div>
      <h1>Add exercise to routine</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Choose an Exercise:</label>
          <select name="exercise" id="exercise" >
            {exercises.map((exercise) => (             
              <option key={exercise.name}>{exercise.name}</option>
            ))};
          </select>
        </div>
        <div>
          <label>Choose a routine</label>
          <select name="routine" id="routine">
            {routines.map((routine) => (
              <option key={routine.name}>{routine.name}</option>
            ))}
          </select>
        </div>
        <div>
          Sets: <input name="sets" type="text" />
        </div>
        <div>
          Reps: <input name="reps" type="text" />
        </div>
        <button type="submit">Add to routine</button>
      </form>
    </div>
  );
}