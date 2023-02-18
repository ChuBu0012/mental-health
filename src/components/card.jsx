import React from "react";

const Card = (props) => {
  const { width, height, style} = props;
  return (
    <div
      className={`w-3/4 lg:w-2/4 h-2/4 p-4 rounded-2xl bg-white shadow-xl ${style}`}
      style={{ width: `${width}`, height: `${height}` }}
    >
      {props.children}
    </div>
  );
};

export default Card;
