import React from 'react';
import logo from '../../../Images/logo.svg'
const DivTrigger = ({ triggerText, buttonRef, showModal, triggerImage }) => {
  return (
    <div
      ref={buttonRef}
      onClick={showModal}
      style={{width: "200px",height:"100px"}}
    >
      <img style={{width: 200, height: 100}} src={triggerImage} alt={logo}></img>
    </div>
  );
};
export default DivTrigger;