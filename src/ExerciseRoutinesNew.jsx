/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

export function ExerciseRoutinesNew(props) {
  const [exercises, setExercises] = useState([]);

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

  useEffect(getExercise, []);

  return(
    <div>
      <h1>Add exercise to routine</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Choose an Exercise:</label>
          <select name="exercise" id="exercise">
            {exercises.map((exercise) => (
              <option key={exercise.name}>{exercise.name}</option>
            ))};
          </select>
        </div>
        <div>
          Routine ID: <input name="routine_id" type="text" />
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