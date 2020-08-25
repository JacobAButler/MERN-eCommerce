import React from 'react';
import logo from '../../../logo.svg'
const DivTrigger = ({ triggerText, buttonRef, showModal, triggerImage }) => {
  return (
    <div
      ref={buttonRef}
      onClick={showModal}
    >
      <img style={{width: 200, height: 100}} src={triggerImage} alt={logo}></img>
    </div>
  );
};
export default DivTrigger;