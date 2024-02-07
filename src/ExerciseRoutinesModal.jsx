/* eslint-disable react/prop-types */
import "./ExerciseRoutinesModal.css";

export function ExerciseRoutinesModal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onCloseExerciseRoutine}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}