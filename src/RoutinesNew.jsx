/* eslint-disable react/prop-types */
export function RoutinesNew(props){
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoutine(params, () => event.target.reset());
  };

  return(
    <div>
      <h2 className="text-center" style={{paddingTop:'30px'}}>Create New Routine:</h2>
      <form className="row g-3 justify-content-center" onSubmit={handleSubmit} style={{padding:'30px'}}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Routine Name:</label>
          <input name="name" type="text" className="form-control" id="name" placeholder="Pull Day"/>
        </div>
        <div className="col-md-6 d-flex align-items-end">
          <button type="submit" className="btn btn-primary" style={{width: '100%', height: '4vh'}}>Create routine</button>
        </div>
      </form>

    </div>
  )
}