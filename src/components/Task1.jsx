import React, { useState } from "react";

function Task1() {
  const [color, setColor] = useState("");
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
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </>
  );
}

export default Task1;
