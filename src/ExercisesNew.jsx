/* eslint-disable react/prop-types */
export function ExercisesNew(props) {
  const handleSubmit = (event) =>{
    event.preventDefault();
     const params = new FormData(event.target);
     props.onCreateExercise(params, () => event.target.reset());
  }
  return (
    <div>
      <h1>New Exercise</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <div>
          Video: <input name="video_url" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Create Exercise</button>
      </form>
    </div>
  );
}