import classes from "./Modal.module.css";
import Card from "./Card";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return <Card className={classes.modal}>{props.children}</Card>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.querySelector("#overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
