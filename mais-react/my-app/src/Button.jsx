import React from "react";
import ProTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
    >
      {props.name}
    </button>
  );
};

Button.ProTypes = {
  width: ProTypes.number.isRequired,
  margin: ProTypes.string,
};

export default Button;
