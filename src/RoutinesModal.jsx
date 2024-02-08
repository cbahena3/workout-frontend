/* eslint-disable react/prop-types */
import "./RoutinesModal.css";

export function RoutinesModal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onCloseRoutine}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}