/* eslint-disable react/prop-types */
export function MuscleGroupsIndex(props) {
  return (
    <div>
      <h1>Benefits of Exercise</h1>
      <iframe 
          width="600" 
          height="400" 
          src="https://www.youtube.com/embed/5m6qpyeDrqI" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      <h2>Select Muscle Group</h2>
      {props.muscles.map((muscle)=>(
        <div key={muscle.id}>
          <h2>{muscle.name}</h2>
        </div>
      ))}
    </div>
  );
}