import React, { useState } from "react";

function Task3() {
  const [textColor, setTextColor] = useState("");

  function handleChange(color) {
    setTextColor(color);
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: textColor }}>
          Hello World <span>In {textColor}</span>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button onClick={() => handleChange("red")}>Red</button>
        <button onClick={() => handleChange("blue")}>Blue</button>
        <button onClick={() => handleChange("green")}>Green</button>
      </div>
    </>
  );
}

export default Task3;
