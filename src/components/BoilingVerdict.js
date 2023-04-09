import React from "react";

export default function BoilingVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return (
      <>
        <br />
        <h5>
          The water <strong>would</strong> boil.
        </h5>
      </>
    );
  }
  return (
    <>
      <br />
      <h5>
        The water <strong>would not</strong> boil.
      </h5>
    </>
  );
}
