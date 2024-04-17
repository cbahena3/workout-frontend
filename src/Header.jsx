import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

export function Header() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  }

  const[jwtExists, setJwtExists] = useState(localStorage.getItem("jwt") !== null ? true : false);
  useEffect(()=>{
    localStorage.getItem("jwt") !== null ? setJwtExists(true) : setJwtExists(false);
  },[]);
  // console.log(`JWT: ${jwtExists}`)

  return (
    <header>
    
    <nav className="navbar navbar-expand-lg bg-primary-subtle " >
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Fitness <img src="https://media.istockphoto.com/id/1248295461/vector/dumbbell-icon-design-vector-template.jpg?s=612x612&w=0&k=20&c=P1_gkO6MjcPvhJxrcRSimIgJ2KX3y4VdK8BqJwQIZPk=" alt="Bootstrap" width="30" height="24"/> </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>


          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Exercises
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/exercises">All Exercises</Link></li>
              <li><hr className="dropdown-divider"/></li>

              <li><Link className="dropdown-item" to="/arms">Arms</Link></li>
              <li><a className="dropdown-item" href="#">Chest</a></li>
              <li><a className="dropdown-item" href="#">Back</a></li>
              <li><a className="dropdown-item" href="#">Legs</a></li>
              <li><a className="dropdown-item" href="#">Shoulders</a></li>

              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="/new-exercises">Create Exercise </Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Routines
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/routines">All Routines</Link></li>
              <li> <Link className="dropdown-item" to="/exercise_routines">All Exercise Routines</Link></li>
              
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="/new_routines">Create Routine</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li> <Link className="dropdown-item" to="/new_exercise_routine">Add Exercise To Routine</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/users"}> Members</Link> 
          </li>

          {jwtExists === true ? 
            (
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick= {handleClick} href="/logout">Logout</a>
            </li>
            ) : 
            (
            <>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
              </li>
            </>
            )
          }
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </header>
  )
}