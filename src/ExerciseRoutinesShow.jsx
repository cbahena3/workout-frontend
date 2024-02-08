/* eslint-disable react/prop-types */
export function ExerciseRoutinesShow(props) {
  const handleSubmit=(event)=>{
    event.preventDefault();
      const params = new FormData(event.target);
      props.onUpdateExerciseRoutine(props.currentExcerciseRoutine.id, params, () => event.target.reset());
      // window.location="/"
  };

  const handleClick = () => {
    props.onDestroyExerciseRoutine(props.currentExerciseRoutine);
  };

  return(
    <div>
      <h1>Exercise Routine information</h1>
      <h2>Exercise ID: {props.currentExcerciseRoutine.exercise_id}</h2>
      <p> Routine ID: {props.currentExcerciseRoutine.routine_id} </p>
      <p>Sets: {props.currentExcerciseRoutine.sets}</p>
      <p>Reps: {props.currentExcerciseRoutine.reps}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Exercise ID: <input defaultValue={props.currentExcerciseRoutine.exercise_id} name="exercise_id" type="text" />
        </div>
        <div>
          Routine ID: <input defaultValue={props.currentExcerciseRoutine.routine_id} name="routine_id" type="text" />
        </div>
        <div>
          Sets: <input defaultValue={props.currentExcerciseRoutine.sets} name="sets" type="text" />
        </div>
        <div>
          Reps: <input defaultValue={props.currentExcerciseRoutine.reps} name="reps" type="text" />
        </div>
        <button type="submit">Update Exercise For Routine</button>
      </form>
        <button onClick={handleClick}>Remove exercise from routine</button>
    </div>
  );
}