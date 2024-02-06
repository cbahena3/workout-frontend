import { Link } from "react-router-dom"
import { Signup } from "./Signup"
import { Logout } from "./Logout"
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
        <Link to="/">Home</Link> | <Link to="/signup">SignUp</Link> | <Link to="/login">Login</Link> | <a onClick= {handleClick} href="/logout">Logout</a> | <a href="/users">All Users</a>
      </nav>
    </header>
  )
}