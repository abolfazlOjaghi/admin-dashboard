import { createPortal } from "react-dom";

const ModalContainer = ({ children, cancel }) => {
  return createPortal(
    <section
      className="w-screen h-screen bg-black/60 backdrop-blur-sm inset-0 fixed z-50 flex items-center justify-center"
      onClick={(e) => {
        e.stopPropagation();
        cancel && cancel();
      }}
    >
      {children}
    </section>,
    document.body,
  );
};
export default ModalContainer;
