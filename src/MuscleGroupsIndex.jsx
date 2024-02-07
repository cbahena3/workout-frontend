/* eslint-disable react/prop-types */
export function MuscleGroupsIndex(props) {
  return (
    <div>
      <h1>All muscle groups</h1>
      {props.muscles.map((muscle)=>(
        <div key={muscle.id}>
          <h2>{muscle.name}</h2>
        </div>
      ))}
    </div>
  );
}