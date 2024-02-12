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
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Exercise Name:</label>
          <input name="name" type="text" className="form-control" id="name" placeholder="Chest Press"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="image_url" className="form-label">Image:</label>
          <input name="image_url" type="text" className="form-control" id="image_url" placeholder="Image Url"/>
        </div>
        <div className="col-12">
          <label htmlFor="video_url" className="form-label">Video:</label>
          <input name="video_url" type="text" className="form-control" id="video_url" placeholder="Video Url"/>
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">Description:</label>
          <input name="description" type="text" className="form-control" id="description" placeholder="This exercise is primarily used for..."/>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Create Exercise</button>
        </div>
      </form>






    </div>
  );
}

{/* <form onSubmit={handleSubmit}>
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
      </form> */}
{/*------------------------------------------------------------------------------------  */}