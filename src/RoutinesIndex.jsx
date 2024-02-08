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
          <h3>Exercise List:</h3>
            <hr />
            {routine.exercise_routines.map((exercise_routine)=>
            <div key={exercise_routine.id}>
              <p>Exercise: {exercise_routine.name}</p>
              <p>Sets: {exercise_routine.sets}</p>
              <p>Reps: {exercise_routine.reps}</p>
              <hr />
            </div>
            )} 
          <button onClick={() => props.onShowRoutine(routine)}> More Info </button>
        </div>
      ))}
    </div>
  )
}

{/* 
          json.exercise_routines routine.exercise_routines do |exercise_routine|
  json.name exercise_routine.exercise.name
  json.sets exercise_routine.sets
  json.reps exercise_routine.reps
end */}