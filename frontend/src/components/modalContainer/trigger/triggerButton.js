import React from 'react';
import noImage from '../../../Images/noImage.png'
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <div
      className="btn btn-lg btn-danger center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
      <img style={{width: 200, height: 100}} src={noImage} alt={noImage}/>
    </div>
  );
};
export default Trigger;
