/* eslint-disable react/prop-types */
export function ExercisesIndex(props){
  return(
    <div>
      <h1>All Exercises</h1>
      {props.exercises.map((exercise) => (
      <div key={exercise.id}>
        <h2>{exercise.name}</h2>
        <img src={exercise.image_url} />
        {/* <video src={exercise.video_url} controls></video>  WILL NOT RUN VIDEO */}
        <p>Description: {exercise.description}</p>
        {/* <p>Muscles Used:</p> cant get this to show */}
      </div>
     ))}
    </div>
  )
}