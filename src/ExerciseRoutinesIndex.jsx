/* eslint-disable react/prop-types */
export function ExerciseRoutinesIndex(props){
  return(
    <div>
      <h1>Exercise Routines Available</h1>
      {props.exerciseRoutines.map((exerciseRoutine) => (
        <div key={exerciseRoutine.id}>
          <h2>Exercise ID: {exerciseRoutine.exercise_id}</h2>
          <p> Routine ID: {exerciseRoutine.routine_id} </p>
          <p>Sets: {exerciseRoutine.sets}</p>
          <p>Reps: {exerciseRoutine.reps}</p>
          <button onClick={() => props.onShowExerciseRoutine(exerciseRoutine)}>More info</button>
        </div>))}
    </div>
  )
}