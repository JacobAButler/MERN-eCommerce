import React from 'react';
const TextTrigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <div
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </div>
  );
};
export default TextTrigger;