import ReactDOM from "react-dom";
import "./Modal.css";

const modalRoot = document.querySelector("#modal");

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    modalRoot
  );
}

export default Modal;
