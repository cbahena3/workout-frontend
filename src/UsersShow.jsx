/* eslint-disable react/prop-types */
export function UsersShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateUser(props.user.id, params, () => event.target.reset());
  };
  const handleClick = () => {
    props.onDestroyUser(props.user);
  };

  return (
    
    <div>
      <h1>{props.user.name}'s information</h1>
      <p><img src = {props.user.image_url}/></p>
      <p>Name: {props.user.name}</p>
      <p>email: {props.user.email}</p>
      <div>
        <h3>Update Info:</h3>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input defaultValue={props.user.name} name="name" type="text" />
          </div>
          <div>
            Profile Photo: <input defaultValue={props.user.image_url} name="image_url" type="text" />
          </div>
          <div>
            Email: <input defaultValue={props.user.email} name="email" type="text" />
          </div>
          <div>
            Password: <input defaultValue={props.user.password} name="height" type="password" />
          </div>
          <div>
            Password Confirmation: <input defaultValue={props.user.password_confirmation} name="height" type="password" />
          </div>
          <button type="submit">Update user</button>
        </form>
          <button onClick={handleClick}>Delete user</button>
      </div>
    </div>
  );
}