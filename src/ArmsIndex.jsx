/* eslint-disable react/prop-types */
//import usedmuscles and muscle group
export function ArmsIndex(props){
  
  return(
    <div>
      <h1>Arm Exercises</h1>
      {props.arms.map((arm) => (
        arm.id === 1 && (
          <div key={arm.id}>
            <h2>{arm.name}</h2>
            <p>{arm.description}</p>
            <p><img src={arm.image_url}/></p>
            {/* {usedMuscles.map((used_muscle) => {
              if (exercise.id === used_muscle.exercise_id) {
                return (
                  <div key={used_muscle.id}>
                    <h1>Muscles Used:</h1>
                    <p>{getMuscleGroupName(used_muscle.muscle_group_id)}</p>
                  </div>
                );
              }
              return null;
            })} */}
          </div>
        )
        
      ))}

    </div>
  )
}


