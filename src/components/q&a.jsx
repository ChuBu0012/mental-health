import React, { useState } from "react";
import Card from "./card";
import "animate.css";

const QandA = (props) => {
  const { Question,animation } = props;
  return (
    <div className={`flex flex-col justify-center items-center w-full h-full ${animation}`}>
      <h1 className="text-3xl font-bold ">{Question}</h1>
      <div className={`mt-8 text-xl grid grid-cols-2 gap-6 gap-x-8 `}>
        {props.children}
      </div>
    </div>
  );
};

export default QandA;
