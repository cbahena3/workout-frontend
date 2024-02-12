/* eslint-disable react/prop-types */
export function RoutinesNew(props){
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoutine(params, () => event.target.reset());
  };

  return(
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <h2>Create New Routine:</h2>

        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Routine Name:</label>
          <input name="name" type="text" className="form-control" id="name" placeholder="Pull Day"/>
        </div>
        <button type="submit" className="btn btn-primary">Create routine</button>
      </form>
    </div>
  )
}