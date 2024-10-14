import React, { useState } from "react";

function Task4() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("white");

  const handleBackgroundChange = (value) => {
    if (value < 0) {
      setBgColor("black");
    } else if (value === 0) {
      setBgColor("white");
    } else if (value >= 1 && value <= 4) {
      setBgColor("blue");
    } else if (value === 5) {
      setBgColor("red");
    } else if (value >= 6 && value <= 10) {
      setBgColor("orange");
    } else if (value > 10) {
      setBgColor("green");
    }
  };

  const increase = () => {
    const newCount = count + 1;
    setCount(newCount);
    handleBackgroundChange(newCount);
  };

  const decrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    handleBackgroundChange(newCount);
  };
  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "100px",
      }}
    >
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <button
          onClick={decrease}
          style={{ fontSize: "20px", padding: "10px" }}
        >
          -
        </button>
        <div
          style={{
            fontSize: "24px",
            margin: "0 20px",
            width: "50px",
            textAlign: "center",
            color: "aqua",
          }}
        >
          {count}
        </div>
        <button
          onClick={increase}
          style={{ fontSize: "20px", padding: "10px" }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Task4;
