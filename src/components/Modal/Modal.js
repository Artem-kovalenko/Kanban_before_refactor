import React, { forwardRef, useImperativeHandle } from "react";
import ReactDom from "react-dom";
import { ModalWrapper, ModalBackdrop, ModalBox } from "./ModalStyle";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    };
  });
  const open = () => {
    setDisplay(true);
  };
  const close = () => {
    setDisplay(false);
  };
  if (display) {
    return ReactDom.createPortal(
      <ModalWrapper  className={"modal-wrapper"}>
        <ModalBackdrop
          onClick={close}
          className={"modal-backdrop"}
        ></ModalBackdrop>
        <ModalBox className={"modal-box"}>
          {props.children}
        </ModalBox>
      </ModalWrapper>,
      document.getElementById("modal-root")
    );
  } else return null;
});

export default Modal;
