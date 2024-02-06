/* eslint-disable react/prop-types */
export function UsersIndex(props) {

  return (
    <div>
      <h1>All users</h1>
      {props.users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <img src={user.image_url} />
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
          <button onClick={() => props.onShowUser(user)}>More info</button>
        </div>
      ))}
    </div>
  );
}