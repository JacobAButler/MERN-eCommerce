import React from 'react';
const ButtonTrigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <div
      ref={buttonRef}
      onClick={showModal}
    >
      <button
        style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem",
          backgroundColor: '#306bc9',
          border: 'none',
          color: 'white',
          padding: '10px 22px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '18px',
        }}
        type="submit"
        
      >
        {triggerText}
      </button>
  
    </div>
  );
};
export default ButtonTrigger;