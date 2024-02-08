import { Link } from "react-router-dom"
import axios from "axios"

export function Header() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  }

  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/signup">SignUp</Link> | <Link to="/login">Login</Link> | <a onClick= {handleClick} href="/logout">Logout</a> | <a href="/users">All Users</a> | <Link to="/new-exercises">Create Exercise </Link> | <Link to="/exercises">All Exercises</Link> | <Link to="/new_exercise_routine">New Exercise Routine</Link> | <Link to="/exercise_routines">All Exercise Routines</Link> | 
      </nav>
    </header>
  )
}