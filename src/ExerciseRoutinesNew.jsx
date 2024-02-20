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
    <div className="modal-body">
      <h1>Add exercise to routine</h1>
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
        <div className="col-6">
          <label htmlFor="sets" className="form-label">Sets:</label>
          <input defaultValue= "3" name="sets" type="text" className="form-control" id="sets"/>
        </div>
        <div className="col-6">
          <label htmlFor="reps" className="form-label">Reps:</label>
          <input defaultValue="12" name="reps" type="text" className="form-control" id="reps"/>
        </div>
        <button type="submit" className="btn btn-primary" >Add to routine</button>
      </form>
    </div>
  );
}