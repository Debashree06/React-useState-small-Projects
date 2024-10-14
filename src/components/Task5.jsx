import React, { useState } from "react";

function Task5() {
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");
  const [bgColor, setBgColor] = useState("");

  function randomColor() {
    let red = Math.trunc(Math.random() * 255);
    let green = Math.trunc(Math.random() * 255);
    let blue = Math.trunc(Math.random() * 255);
    const color = `rgb(${red},${green},${blue})`;
    setBgColor(color);
  }

  function generateRGB() {
    if (red <= 255 && green <= 255 && blue <= 255) {
      const color = `rgb(${red},${green},${blue})`;
      setBgColor(color);
    } else {
      alert("Please enter valid RGB values (0-255).");
    }
  }

  return (
    <>
      <div style={{ display: "grid", gap: "1rem" }}>
        <div style={{ gap: "2.1rem", display: "flex" }}>
          <label htmlFor="">Red</label>
          <input
            type="number"
            value={red}
            onChange={(e) => setRed(e.target.value)}
            placeholder="0-255"
            min="0"
            max="255"
          />
        </div>
        <div style={{ gap: "1.2rem", display: "flex" }}>
          <label htmlFor="">Green</label>
          <input
            type="number"
            value={green}
            onChange={(e) => setGreen(e.target.value)}
            placeholder="0-255"
            min="0"
            max="255"
          />
        </div>
        <div style={{ gap: "2rem", display: "flex" }}>
          <label htmlFor="">Blue</label>
          <input
            type="number"
            value={blue}
            onChange={(e) => setBlue(e.target.value)}
            placeholder="0-255"
            min="0"
            max="255"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "70px",
            backgroundColor: bgColor,
            border: "1px solid black",
            marginBottom: "0px",
          }}
        ></div>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            width: "30%",
          }}
        >
          <button style={{ cursor: "pointer" }} onClick={generateRGB}>
            Generate RGB
          </button>
          <button style={{ cursor: "pointer" }} onClick={randomColor}>
            Generate Random Color
          </button>
        </div>
      </div>
    </>
  );
}

export default Task5;
