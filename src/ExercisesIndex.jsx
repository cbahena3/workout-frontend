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
      <h1 className="text-center" >All Exercises</h1>
      
      {props.exercises.map((exercise) => (
      <div className="card container mb-3" style={{width: "25rem"}} key={exercise.id}>       
        <img src={exercise.image_url} className="card-img-top"/>
        <div className="card-body text-center">
          <h5 className="card-title">{exercise.name}</h5>
          <p className="card-text">{exercise.description}</p>
          <button onClick={() => props.onShowExercise(exercise)} className="btn btn-primary shadow">More info</button>        
        </div>
      </div>     
     ))}
    </div>
  )
}