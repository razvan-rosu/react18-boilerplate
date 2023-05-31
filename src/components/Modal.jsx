import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import MyCard from "component-library/packages/my-card";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<MyCard>{children}</MyCard>, elRef.current);
};

export default Modal;
