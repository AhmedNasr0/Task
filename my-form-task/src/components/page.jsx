import { useState } from "react";
import Checkbox from "./checkbox";

const Page = ({ label, isHeader = false }) => {
    const [isHover, setIsHover] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
  
    const toggleSelect = () => setIsSelected(!isSelected);
  
    const containerStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "42px",
      borderRadius: "6px",
      cursor: "pointer",
      padding: isHeader ? "0 10px 0 6px" : "0",
      width: isHeader ? "320px" : "auto",
      transition: "all 150ms ease-in-out",
    };
  
    const labelStyle = {
      fontSize: "14px",
      color: "#1F2128",
      fontWeight: "400",
      letterSpacing: "0px",
      lineHeight: "140%",
      fontFamily: "Montserrat, sans-serif",
      userSelect: "none",
    };
  
    return (
      <div
        style={containerStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={toggleSelect}
      >
        <span style={labelStyle}>{label}</span>
        <Checkbox
          isSelected={isSelected}
          isHover={isHover}
          isPressed={isPressed}
          onClick={toggleSelect}
        />
      </div>
    );
  };
  
  export default Page;