import React from "react";

function Alert(props) {
  const capitalized = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div className="alert alert-success" role="alert">
        <strong>
          {capitalized(props.alert.type)}: {props.alert.msg}
        </strong>
      </div>
    )
  );
}

export default Alert;
