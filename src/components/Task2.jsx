import React, { useState } from "react";

function Task2() {
  const [color, setColor] = useState("black");

  const handleChangeColor = () => {
    setColor((ele) => (ele === "black" ? "aqua" : "black"));
  };
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={handleChangeColor}>Change Color</button>
      </div>
    </>
  );
}

export default Task2;
