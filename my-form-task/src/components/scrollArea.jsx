

const ScrollArea = ({ children }) => {
    const containerStyle = {
      height: '164px',
      width: '320px',
      overflow: 'hidden',
      padding: '8px'
    };
  
    const scrollStyle = {
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden'
    };
  
    return (
      <div style={containerStyle}>
        <div style={scrollStyle} className="scrollbar-hide">
          {children}
        </div>
      </div>
    );
  };

  
export default ScrollArea;