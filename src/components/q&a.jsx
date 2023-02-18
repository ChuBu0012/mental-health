import React, { useState } from "react";
import Card from "./card";
import "animate.css";

const QandA = (props) => {
  const { Question, animation, func } = props;
  return (
    <Card
      style={`relative flex flex-col justify-center items-center ${animation}`}
    >
      <h1 className="text-3xl font-bold ">{Question}</h1>
      <div className={`mt-8 text-xl grid grid-cols-2 gap-6 gap-x-8 w-3/5 ${animation}`}>
        {props.children}
      </div>
    </Card>
  );
};

export default QandA;
