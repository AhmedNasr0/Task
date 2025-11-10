import React from "react";
import { Check } from "lucide-react";

const Checkbox = ({ isSelected, onClick, isHover, isPressed }) => {

    let backgroundColor = "transparent";
    let boxShadow = "none";
    let checkColor = "transparent";
    let borderColor = "#CDCDCD";

    if (isHover && !isSelected) {
        checkColor = "#E3E3E3";
      }

    if (isPressed && !isSelected) {
        borderColor = "#BDBDBD";
        checkColor = "#878787";
        boxShadow = "0 0 0 2px rgba(80, 135, 248, 0.4)";
    } else if (isHover && !isSelected) {
        checkColor = "#E3E3E3";
    }

    if (isSelected) {
        borderColor = "transparent";
        if (isPressed) {
          backgroundColor = "#2469F6";
          boxShadow = "0 0 0 2px rgba(80, 135, 248, 0.4)";
          checkColor = "#FFFFFF";
        } else if (isHover) {
          backgroundColor = "#5087F8";
          checkColor = "#FFFFFF";
        } else {
          backgroundColor = "#2469F6";
          checkColor = "#FFFFFF";
        }
      }

      const checkboxStyle = {
        width: "23px",
        height: "23px",
        borderRadius: "6px",
        border: `1px solid ${borderColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor,
        cursor: "pointer",
        boxShadow,
        transition: "all 150ms ease-in-out",
      };

  return (
    <div
      style={checkboxStyle}
      onClick={onClick}
    >
      <Check
        size={22}
        color={checkColor}
        strokeWidth={1.5}
      />
    </div>
  );
};

export default Checkbox;