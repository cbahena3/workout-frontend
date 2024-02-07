/* eslint-disable react/prop-types */
export function ExerciseRoutinesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateExerciseRoutine(params, () => event.target.reset());
  };
  
  return(
    <div>
      <h1>Add exercise to routine</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Exercise ID: <input name="exercise_id" type="text" />
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