import React from "react";

const PrinterSuspended = () => {
  return (
    <div className="container text-center">
      <h1>
        Printer Suspended{" "}
        <span role="img" aria-label="sad face">
          😔
        </span>
        <span role="img" aria-label="pritner">
          🖨️
        </span>
      </h1>
      <p>
        We're sorry, but the printer you are trying to access has been
        suspended.
      </p>
      <p>Please try a different printer</p>
    </div>
  );
};

export default PrinterSuspended;
