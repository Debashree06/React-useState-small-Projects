import React, { useState } from "react";

function Task7() {
  const [circle, setCircle] = useState([]);

  //circle create function
  function createCircle() {
    let obj = {
      isSelected: false,
      id: Math.trunc(Math.random() * 100000),
    };
    setCircle([...circle, obj]);
  }

  function selectedCircle(id) {
    // console.log(id);
    let updatedCircle = circle.map((ele) => {
      if (ele.id == id) {
        ele.isSelected = !ele.isSelected;
      }
      return ele;
    });
    setCircle(updatedCircle);
  }

  //selected circle delete function
  function deleteSelectedCircle(id) {
    let updatedCircle = circle.filter((ele) => !ele.isSelected);
    setCircle(updatedCircle);
  }
  return (
    <>
      {/* {console.log(circle)} */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          margin: "10px",
        }}
      >
        <button onClick={createCircle}>CREATE</button>
        <button onClick={deleteSelectedCircle}>DELETE</button>
      </div>
      <div className="" style={{ display: "flex", gap: "40px" }}>
        <b>No of Circles:{circle.length}</b>
        <b>
          No of Selected Circles:{circle.filter((e) => e.isSelected).length}
        </b>
      </div>
      <div
        className="circles"
        style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
      >
        {circle.map((ele) => {
          return (
            <div
              className="circle"
              onClick={() => selectedCircle(ele.id)}
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                border: "2px solid aqua",
                background: ele.isSelected ? "aqua" : "black",
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default Task7;
