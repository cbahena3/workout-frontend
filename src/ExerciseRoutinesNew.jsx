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
    setExercises(response.data);
    })
  }
  const getRoutine = () => {
    axios.get("/routines.json").then((response) => {
    setRoutines(response.data);
    })
  };

  useEffect(getExercise, []);
  useEffect(getRoutine,[])

  return(
    <div className="modal-body" style={{padding: '20px'}}>
      <h1 className="text-center">Add exercise to routine</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div style={{padding: '25px'}}>
          <label htmlFor="exercise" className="form-label">Choose an Exercise:</label>
          <select className="form-select" name="exercise" id="exercise" >
            {exercises.map((exercise) => (             
              <option key={exercise.name}>{exercise.name}</option>
            ))};
          </select>
        </div>
        <div style={{padding: '20px'}}>
          <label htmlFor="routine" className="form-label">Choose a routine</label>
          <select className="form-select" name="routine" id="routine">
            {routines.map((routine) => (
              <option key={routine.id}>{routine.name}</option>
            ))}
          </select>
        </div>
        <div className="col-6" style={{padding: '20px'}}>
          <label htmlFor="sets" className="form-label">Sets:</label>
          <input placeholder= "3" name="sets" type="text" className="form-control" id="sets"/>
        </div>
        <div className="col-6" style={{padding: '20px'}}>
          <label htmlFor="reps" className="form-label">Reps:</label>
          <input placeholder="12" name="reps" type="text" className="form-control" id="reps"/>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary" style={{width: '50%'}}>Add to routine</button>
        </div>
      </form>
    </div>
  );
}