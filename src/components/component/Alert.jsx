// Alert.jsx
import React from 'react';

const Alert = ({ message, visible }) => {
    if (!visible) return null;


    // agrego esto
    return (
        <div style={{ 
            backgroundColor: 'green', 
            color: 'white', 
            padding: '10px', 
            borderRadius: '5px', 
            display: 'flex' ,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '14%',
            right: '-8.5%' ,
            transform: 'translate(-50%, -50%)',
            zIndex: '1000'
            }}>
          
            
        
            {message}
        </div>
    );
};

export default Alert;
