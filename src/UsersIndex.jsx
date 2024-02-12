/* eslint-disable react/prop-types */
export function UsersIndex(props) {

  return (
    <div>
      <h1 className="text-center">All users</h1>
      {props.users.map((user) => (
        <div key={user.id} className="card container mb-3" style={{width: "25rem"}}>
          <h2 className="card-title">{user.name}</h2>
          <div className="card-body text-center">
            <img className="card-img-top" src={user.image_url} />
            <p className="card-text">email: {user.email}</p>
            <button onClick={() => props.onShowUser(user)} className="btn btn-primary shadow">More info</button>
          </div>
            
        </div>
      ))}
    </div>
  );
}