/* eslint-disable react/prop-types */
export function ExercisesNew(props) {
  const handleSubmit = (event) =>{
    event.preventDefault();
     const params = new FormData(event.target);
     props.onCreateExercise(params, () => event.target.reset());
  }
  return (
    <div style={{padding: '50px'}}>
      <h1 className="text-center" style={{padding: '0px 0px 10px'}}>New Exercise</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6" style={{padding: '25px'}}>
          <label htmlFor="name" className="form-label">Exercise Name:</label>
          <input name="name" type="text" className="form-control" id="name" placeholder="Chest Press"/>
        </div>
        <div className="col-md-6" style={{padding: '25px'}}>
          <label htmlFor="image_url" className="form-label">Image:</label>
          <input name="image_url" type="text" className="form-control" id="image_url" placeholder="Image Url"/>
        </div>
        <div className="col-12" style={{padding: '25px'}}>
          <label htmlFor="video_url" className="form-label">Video:</label>
          <input name="video_url" type="text" className="form-control" id="video_url" placeholder="Video Url"/>
        </div>
        <div className="col-12" style={{ padding: '25px' }}>
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea name="description" className="form-control" id="description" placeholder="This exercise is primarily used for..."></textarea>
        </div>
        <div className="col-12 text-center" style={{padding:'20px 0px 0px 0px'}}>
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