/* eslint-disable react/prop-types */
export function RoutinesIndex(props){
  return(
    <div>
      <h1>Routines</h1>
      {props.routines.map((routine)=>(
        <div key={routine.id}>
          <h2>Routine ID:{routine.id}</h2>
          <p>User_ID:{routine.user_id}</p>
          <p>Day:{routine.name} </p>
          <button onClick={() => props.onShowRoutine(routine)}> More Info </button>
        </div>
      ))}
    </div>
  )
}