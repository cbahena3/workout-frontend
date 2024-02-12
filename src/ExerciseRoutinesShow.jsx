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
    <div className="modal-body">
      <h1>Exercise Routine information</h1>
      <h2>Exercise ID: {props.currentExcerciseRoutine.exercise_id}</h2>
      <p> Routine ID: {props.currentExcerciseRoutine.routine_id} </p>
      <p>Sets: {props.currentExcerciseRoutine.sets}</p>
      <p>Reps: {props.currentExcerciseRoutine.reps}</p>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exercise_id" className="form-label">Exercise Id:</label>
          <input defaultValue={props.currentExcerciseRoutine.exercise_id} name="exercise_id" type="text" className="form-control" id="exercise_id"/>
        </div>
        <div>
          <label htmlFor="routine_id" className="form-label">Routine Id:</label>
          <input defaultValue={props.currentExcerciseRoutine.routine_id} name="routine_id" type="text" className="form-control" id="routine_id"/>
        </div>
        <div>

          <label htmlFor="sets" className="form-label">Sets:</label>
          <input defaultValue={props.currentExcerciseRoutine.sets} name="sets" type="text" className="form-control" id="sets"/>
        </div>
        <div>

          <label htmlFor="reps" className="form-label">Reps:</label>
          <input defaultValue={props.currentExcerciseRoutine.reps} name="reps" type="text" className="form-control" id="reps"/>
        </div>
        <button type="submit" className="d-grid gap-2 col-6 mx-auto btn btn btn-primary" >Save Changes</button>
      </form>
      <br />
        <button className="d-grid gap-2 col-6 mx-auto btn btn-secondary" onClick={handleClick}>Remove Exercise From Routine</button>
    </div>
  );
}