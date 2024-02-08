/* eslint-disable react/prop-types */
export function RoutinesNew(props){
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoutine(params, () => event.target.reset());
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create New Routine:</h2>
        <div>
          <p>Day: <input name="name" type="text" /></p>
        </div>
        <button>Create routine</button>
      </form>
    </div>
  )
}