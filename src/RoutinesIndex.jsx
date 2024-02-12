/* eslint-disable react/prop-types */
export function RoutinesIndex(props){
  return(
    <div>
      <h1 className="text-center" >Routines</h1>
      {props.routines.map((routine)=>(
        <div className="card container mb-3" style={{width: "40rem"}} key={routine.id}>
          <div className="card-body text-center">
            <h2 className="card-title">{routine.name} </h2>
            <hr />
            <h3>Exercise List:</h3>
          </div>
            {routine.exercise_routines.map((exercise_routine)=>
            <div className="card-body text-center"key={exercise_routine.id}>
              <p className="card-text">Exercise: {exercise_routine.name}</p>
              <p className="card-text">Sets: {exercise_routine.sets}</p>
              <p className="card-text">Reps: {exercise_routine.reps}</p>
              <hr />
            </div>
            )} 
          <button onClick={() => props.onShowRoutine(routine)} className="btn btn-primary shadow"> More Info </button>
        </div>
      ))}
    </div>
  )
}