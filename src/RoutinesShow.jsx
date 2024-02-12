/* eslint-disable react/prop-types */
export function RoutinesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateRoutine(props.routine.id, params, () => event.target.reset());
  }

  const handleClick = () => {
    props.onDestroyRoutine(props.routine);
  };

  return(
    <div className="modal-body">
      <h1>Routine Information </h1>
        <h2>Creator:{props.routine.user}</h2>
        <p>Current Routine Name:{props.routine.name} </p>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-7">

            <label htmlFor="name" className="form-label">Routine Name:</label>
            <input defaultValue={props.routine.name} name="name" type="text" className="form-control" id="name"/>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary" >Save Changes</button>
          </div>  
        </form>
        <br />
        <button onClick={handleClick} className="d-grid gap-2 col-6 mx-auto btn btn-secondary" >Delete Routine</button>
    </div>
  )
}
