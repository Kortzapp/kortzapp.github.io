import React from 'react';
import './dialog.css';

const Dialog = ({onClose, children}) => {
    return (
        <div className="dialog-overlay" onClick={onClose}>
            <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
                <div className="dialog-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Dialog;
