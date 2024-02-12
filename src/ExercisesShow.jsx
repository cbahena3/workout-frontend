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
    <div className="modal-body">
      <h1>Exercise information</h1>
      <h2>{props.exercise.name}</h2>
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
      <h3>Update Information:</h3>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-7">
          <label htmlFor="name" className="form-label">Name:</label>
          <input defaultValue={props.exercise.name} name="name" type="text" className="form-control" id="name"/>
        </div>
        <div className="col-7">
          <label htmlFor="image_url" className="form-label">Image:</label>
          <input defaultValue={props.exercise.image_url} name="image_url" type="text" className="form-control" id="image_url"/>
        </div>
        <div className="col-7">
          <label htmlFor="video_url" className="form-label">Video:</label>
          <input defaultValue={props.exercise.video_url} name="video_url" type="text" className="form-control" id="video_url"/>
        </div>
        <div className="col-7">
          <label htmlFor="description" className="form-label">Description:</label>
          <input defaultValue={props.exercise.description} name="description" type="text" className="form-control" id="description" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </div>
      </form>
      <br />
      <button onClick={handleClick} className="btn btn-secondary">Delete exercise</button>
    </div>
  );
}
