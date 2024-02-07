/* eslint-disable react/prop-types */
export function ExerciseRoutinesShow(props) {
  return (
    <div>
      <h1>Exercise Routine information</h1>
      <h2>Exercise ID: {props.currentExcerciseRoutine.exercise_id}</h2>
      <p> Routine ID: {props.currentExcerciseRoutine.routine_id} </p>
      <p>Sets: {props.currentExcerciseRoutine.sets}</p>
      <p>Reps: {props.currentExcerciseRoutine.reps}</p>
    </div>
  );
}