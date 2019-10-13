import React from "react";
// Props are immutable

const PropComponent = props => {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
};

export default PropComponent;

// function must return with a container element
