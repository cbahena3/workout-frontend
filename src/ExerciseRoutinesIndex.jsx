/* eslint-disable react/prop-types */

export function ExerciseRoutinesIndex(props){
  return(
    <div>
      <h1 className="text-center">Exercise Routines Available</h1>
      {props.exerciseRoutines.map((exerciseRoutine) => (
        <div className="card container mb-4 border border-primary-subtle" style={{width: "28rem"}} key={exerciseRoutine.id}>
          <div className="card-body text-center">
            <h2 className="card-title">Exercise: {exerciseRoutine.name}</h2>
            <p className="card-text"> Routine: {exerciseRoutine.routine_name} </p>
            <p className="card-text">Sets: {exerciseRoutine.sets}</p>
            <p className="card-text">Reps: {exerciseRoutine.reps}</p>
            <button className="btn btn-primary shadow" onClick={() => props.onShowExerciseRoutine(exerciseRoutine)}>Edit info</button>          
          </div>
        </div>))}
    </div>
  )
}