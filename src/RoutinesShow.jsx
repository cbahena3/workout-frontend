/* eslint-disable react/prop-types */
export function RoutinesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateRoutine(props.routine.id, params, () => event.target.reset());
  }
  return(
    <div>
      <h1>Routine Information </h1>
        <h2>Routine ID:{props.routine.id}</h2>
        <p>Day:{props.routine.name} </p>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Day: <input name="name" type="text" /></p>
          </div>
          <button type="submit">Update Routine</button>
        </form>
    </div>
  )
}