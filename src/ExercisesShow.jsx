/* eslint-disable react/prop-types */
export function ExercisesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateExercise(props.exercise.id, params, () => event.target.reset());
  };
  const handleClick = () => {
    props.onDestroyExercise(props.exercise);
    window.location = "/"
  };
  return (
    <div>
      <h1>Exercise information</h1>
      <h2>Name: {props.exercise.name}</h2>
      <iframe 
          width="600" 
          height="400" 
          src={`https://www.youtube.com/embed/${props.exercise.video_url}`}
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      <p><img src={props.exercise.image_url}/></p>
      <p>Description: {props.exercise.description}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.exercise.name} name="name" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.exercise.url} name="image_url" type="text" />
        </div>
        <div>
          Video: <input defaultValue={props.exercise.width} name="video_url" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.exercise.height} name="description" type="text" />
        </div>
        <button type="submit">Update exercise</button>
      </form>
        <button onClick={handleClick}>Delete exercise</button>
    </div>
  );
}