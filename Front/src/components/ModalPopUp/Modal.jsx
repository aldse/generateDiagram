import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onBackdropClick, children }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div 
      onClick={onBackdropClick} 
      style={{
        zIndex: 9999
      }}
    >
      <div 
        onClick={handleModalClick} 
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '90%',
          maxHeight: '90%',
          overflow: 'auto',
        }}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
