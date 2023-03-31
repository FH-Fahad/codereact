import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newString = text.toUpperCase();
    setText(newString);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let newString = text.toLowerCase();
    setText(newString);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleFirstClick = () => {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    let newString = arr.join(" ");
    setText(newString);
    props.showAlert("First charecter capitalized", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text box cleared", "success");
  };

  const handleClearClick = () => {
    let newString = "";
    setText(newString);
    props.showAlert("Text box cleared", "success");
  };

  const handleRemoveSpaceClick = () => {
    let newString = text.split(/[ ]+/);
    setText(newString.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  let words = text.split(/\s+/).filter((element) => {
    return element.length !== 0;
  }).length;
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1"
          onClick={handleUpClick}
        >
          Upper
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleLowClick}
        >
          Lower
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={handleFirstClick}
        >
          Cap First
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={handleRemoveSpaceClick}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1>Text Summary</h1>
        <p>
          {words} words and {text.length} characters. <br></br>{" "}
          {(0.008 * words).toPrecision(1)} minutes to read.
        </p>
      </div>
    </>
  );
}
