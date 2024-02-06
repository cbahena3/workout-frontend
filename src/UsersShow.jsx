/* eslint-disable react/prop-types */
export function UsersShow(props) {
  return (
    <div>
      <h1>{props.user.name}'s information</h1>
      <p><img src = {props.user.image_url}/></p>
      <p>Name: {props.user.name}</p>
      <p>email: {props.user.email}</p>
    </div>
  );
}