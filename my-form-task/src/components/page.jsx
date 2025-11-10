import Checkbox from './checkbox';

const Page = ({ label, isHeader = false }) => {
  
    const pageStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '42px',
      borderRadius: '6px',
      cursor: 'pointer',
      
    };

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '42px',
        borderRadius: '6px',
        cursor: 'pointer',
        padding: '0 8px',
        width: '320px',

    };
  
    const labelStyle = {
        fontSize: '14px',
        color: '#1F2128',
        fontWeight: '400',
        letterSpacing: '0px',
        lineHeight: '140%',
        fontFamily: 'Montserrat',
        userSelect: 'none'
      };
  
    return (
      <div 
        style={isHeader ? headerStyle : pageStyle}
      >
        <span style={labelStyle}>{label}</span>
        <Checkbox />
      </div>
    );
  };

export default Page;