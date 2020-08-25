import React from 'react';
import ReactDOM from 'react-dom';
import { Forms } from './forms/formIndex';
import FocusTrap from 'focus-trap-react';
import './CSS/modalCSS.css'


export const Modal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  onSubmit,
  largeModal = {
      height: "200px",
      width: "200px",
      backgroundColor: "red"
  },
  formType,
  info
}



) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <div >
        <aside
            tag="aside"
            role="dialog"
            tabIndex="-1"
            aria-modal="true"
            className="modal-cover"
            onClick={onClickOutside}
            onKeyDown={onKeyDown}
        >
            <div className="modal-area" ref={modalRef}>
            <button
                ref={buttonRef}
                aria-label="Close Modal"
                aria-labelledby="close-modal"
                className="_modal-close"
                onClick={closeModal}
            >
                <span id="close-modal" className="_hide-visual">
                Close
                </span>
                <svg className="_modal-close-icon" viewBox="0 0 40 40">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                </svg>
            </button>
            <div className="modal-body">
                <Forms onSubmit={onSubmit} formType={formType} info={info}/>
            </div>
            </div>
        </aside>
      </div>
    </FocusTrap>,
    document.body
  );
};

export default Modal;