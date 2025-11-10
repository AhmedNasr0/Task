import { useState } from 'react';



const Button = ({ text}) => {
    const [isHover, setIsHover] = useState(false);
  
    const buttonStyle = {
      width: '340px',
      height: '40px',
      padding: '12px',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: isHover ? '#FFD84D' : '#FFCE22',
      border: 'none',
      cursor: 'pointer',
      outline: 'none',
      fontFamily: 'Montserrat',
      fontWeight: '400',
      color: '#1F2128',
      letterSpacing: '0px',
      lineHeight: '120%',
    };
  
    return (
      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {text}
      </button>
    );
  };

export default Button;