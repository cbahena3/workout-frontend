/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function MuscleGroupsIndex(props) {
  return (
    <div className="text-center ">
      <h2 className="">Benefits of Exercise</h2>
      <iframe 
          width={700}
          height={350}
          src="https://www.youtube.com/embed/5m6qpyeDrqI" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      <h2 >Muscle Groups</h2>
      {props.muscles.map((muscle)=>(
        <div key={muscle.id} >
          <a href="">  <img className="w-50 p-3"src={muscle.image_url} /> </a>
          <br />
          <Link className="dropdown-item" to="/arms">Arms</Link>
          <button type="button" className="btn btn-dark shadow w-25 p-2 border border-primary">{muscle.name} </button>
        </div>
      ))}
      <br />
    </div>
  );
}