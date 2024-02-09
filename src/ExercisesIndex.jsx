/* eslint-disable react/prop-types */
// import axios from "axios";
// import { useEffect, useState } from "react";

export function ExercisesIndex(props){
  // const [muscleGroups, setMuscleGroups] = useState([]);
  // const getMuscleGroup = () => {
  //   axios.get("http://localhost:3000/muscle_groups.json").then((response) => {
  //   console.log(response.data);
  //   setMuscleGroups(response.data);
  //   })
  // }
  // useEffect(getMuscleGroup, []);

  return(
    <div>
      <h1>All Exercises</h1>
      {props.exercises.map((exercise) => (
      <div key={exercise.id}>
        <h2>{exercise.name}</h2>
        <img src={exercise.image_url} />
        <p>Description: {exercise.description}</p>
        {/* <p>Muscles Used: {exercise.muscle_groups}</p> */}
        {/* {muscleGroups.map((muscle_groups) => (
              <p key={muscle_groups.id}>{muscle_groups.name}</p>
            ))} */}
        <button onClick={() => props.onShowExercise(exercise)}>More info</button>
      </div>
     ))}
    </div>
  )
}