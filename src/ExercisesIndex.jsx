/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

export function ExercisesIndex(props){
  const [muscleGroups, setMuscleGroups] = useState([]);
  const getMuscleGroup = () => {
    axios.get("/muscle_groups.json").then((response) => {
    setMuscleGroups(response.data);
    })
  }
  useEffect(getMuscleGroup, []);

  const [usedMuscles, setUsedMuscles] = useState([]);
  const getUsedMuscles = () => {
    axios.get("/used_muscles.json").then((response) => {
    setUsedMuscles(response.data);
    })
  }
  useEffect(getUsedMuscles, []);

  const getMuscleGroupName = (groupId) => {
    const muscleGroup = muscleGroups.find(group => group.id === groupId);
    return muscleGroup ? muscleGroup.name : "Unknown Muscle Group";
  }

  return(
    <div>
      <h1 className="text-center" >All Exercises</h1>
      {props.exercises.map((exercise) => (
      <div className="card container mb-4 border border-primary-subtle" style={{width: "25rem"}} key={exercise.id}>       
        <img src={exercise.image_url} className="card-img-top"/>
        <div className="card-body text-center">
          <h5 className="card-title">{exercise.name}</h5>
          <p className="card-text">{exercise.description}</p>
          <p className="card-text">Muscles Used:   
          {usedMuscles.map((used_muscle) => {
            if (exercise.id === used_muscle.exercise_id) {
              return (
                <div key={used_muscle.id}>
                  <p>{getMuscleGroupName(used_muscle.muscle_group_id)}</p>
                </div>
              );
            }
            return null;
          })}
          </p>
          <button onClick={() => props.onShowExercise(exercise)} className="btn btn-primary shadow">More info</button>        
        </div>
      </div>     
     ))}
    </div>
  )
}




