/* eslint-disable react/prop-types */
import "./Exercisesmodal.css";

export function ExercisesModal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onCloseExercise}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}