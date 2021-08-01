import { useState } from "react";

const Square = ({ squareColor }) => {
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: squareColor
      }}>
    </div>
  );
}

export default Square;