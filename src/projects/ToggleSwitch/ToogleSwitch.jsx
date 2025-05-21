import { useState } from "react";
import "./ToogleSwitch.css";

export const ToogleSwitch = () => {
  const [isOn, setIsOn] = useState(false); // Initial state

  const handleToogleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className="toogle-switch"
      style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }}
      onClick={handleToogleSwitch}
    >
      <div className={`switch ${isOn ? "On" : "Off"}`}>
        <span className="switch-state">{isOn ? "On" : "Off"}</span>
      </div>
    </div>
  );
};
