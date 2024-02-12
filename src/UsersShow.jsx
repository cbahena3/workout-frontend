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
    
    <div className="modal-body overflow-auto" style={{ maxHeight: '80vh' }}>
      <h1>{props.user.name}'s information</h1>
      <p><img src = {props.user.image_url}/></p>
      <p>Name: {props.user.name}</p>
      <p>email: {props.user.email}</p>
      <div>
        <h3>Update Info:</h3>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-6">
            <label htmlFor="name" className="form-label">Name:</label>
            <input defaultValue={props.user.name} name="name" type="text" className="form-control" id="name"/>
          </div>
          <div className="col-6">
              <label htmlFor="image_url" className="form-label">Profile Photo:</label>
              <input defaultValue={props.user.image_url} name="image_url" type="text" className="form-control" id="image_url"/>
          </div>
          <div className="col-12">

            <label htmlFor="email" className="form-label">Email:</label>
            <input defaultValue={props.user.email} name="email" type="text" className="form-control" id="email" />
          </div>
          <div>

            <label htmlFor="password" className="form-label">New Password:</label>
            <input defaultValue={props.user.password} name="password" type="password" className="form-control" id="password"  maxLength={20}/>
          </div>
          <div>
            <label htmlFor="password_confirmation" className="form-label">Password Confirmation:</label>
            <input defaultValue={props.user.password_confirmation} name="password_confirmation" type="password" className="form-control" id="password_confirmation"  maxLength={20}/>
          </div>
          <button type="submit" className="d-grid gap-2 col-6 mx-auto btn btn btn-primary" >Save Changes </button>
        </form>
          <br />
          <button onClick={handleClick} className="d-grid gap-2 col-6 mx-auto btn btn-secondary">Delete user</button>
      </div>
    </div>
  );
}