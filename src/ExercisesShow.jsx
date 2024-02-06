/* eslint-disable react/prop-types */
export function ExercisesShow(props) {
  return (
    <div>
      <h1>Exercise information</h1>
      <p>Name: {props.exercise.name}</p>
      <p><img src={props.exercise.image_url}/></p>
      <p><video src={props.exercise.video_url} controls></video></p>
      <p>Description: {props.exercise.description}</p>
    </div>
  );
}