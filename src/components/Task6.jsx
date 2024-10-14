import React, { useState } from "react";

function Task6() {
  const [text, setText] = useState("");

  const countWords = () => {
    // return text.trim().split(" ").length;

    let words = 0;
    let myText = text.trim();
    if (myText) {
      for (let i = 0; i <= myText.length; i++) {
        if (myText[i] == " ") {
          words++;
        }
      }
      words = words + 1;
    }
    return words;
  };

  const removeLastWord = () => {
    let array = text.trim().split(" ");
    let updateText = array.slice(0, array.length - 1).join(" ");
    setText(updateText);
  };

  return (
    <>
      <div>
        <textarea
          name=""
          id=""
          rows={10}
          cols={40}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div>
        <h1>No. of Characters: {text.trim().length}</h1>
        <h1>No. of words : {text && countWords()}</h1>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => setText("")}>Remove text </button>
        <button onClick={() => removeLastWord()}>Remove last word</button>
        <button onClick={() => setText(text.slice(0, text.length - 1))}>
          Remove last letter
        </button>
      </div>
    </>
  );
}

export default Task6;
