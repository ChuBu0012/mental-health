import React, { useEffect, useRef, useState } from "react";
import QandA from "./components/q&a";
import { mockdata } from "./components/datas";
import { useDispatch, useSelector } from "react-redux";
import {
  countIndex,
  removeIndex,
  selectChoice,
  setValue,
  setAns,
} from "./store/userSlice";
import Choice from "./components/choice";
import Card from "./components/card";
const HomePage = () => {
  const [nextQ, setNextQ] = useState(0);
  const [lastQ, setLastQ] = useState(false);
  const [statusSlide, setStatusSlide] = useState({
    status: true,
    animation:
      "animate__animated animate__fadeInRight animate__animated animate__fadeInRight",
  });
  const [isCheckSelect, setisCheckSelect] = useState(false);
  const [isCheckPrev, setisCheckPrev] = useState(false);
  const { users } = useSelector((state) => ({ ...state }));
  const usersvalue = users.value;
  const dispatch = useDispatch();

  const NextQuestion = () => {
    setNextQ((prevnum) => {
      if (nextQ === mockdata.length - 1) {
        // dev
        return prevnum;
      }
      return prevnum + 1;
    });
  };
  const PrevQuestion = () => {
    setNextQ(nextQ - 1);
    setisCheckSelect(false);
  };
  const setAnsAndN_Q = () => {
    NextQuestion();
    dispatch(setAns());
  };
  const setIndex = () => {
    dispatch(removeIndex());
    dispatch(countIndex(mockdata[nextQ].choice.length));
    if (nextQ == 0) {
      setisCheckPrev(false);
    } else {
      setisCheckPrev(true);
    }
  };
  useEffect(() => {
    setIndex();
  }, [nextQ]);

  return (
    <Card style={`overflow-hidden`}>
      <QandA Question={mockdata[nextQ]?.q} animation={statusSlide.animation}>
        {mockdata[nextQ].choice.map((ele, index) => {
          
          return (
            <Choice
              style={`${usersvalue.checkedchoice[index] ? "underline" : ""}`}
              clickfuc={(e) => {
                dispatch(
                  setValue({
                    Ques: ele.label,
                    Ans: ele.value,
                  })
                );
                dispatch(selectChoice(index));
                setisCheckSelect(true);
              }}
              key={index}
              label={ele.label}
            />
          );
        })}
        {isCheckPrev && (
          <Choice
            clickfuc={() => {
              PrevQuestion();
            }}
            label={"prev"}
          />
        )}
        <Choice
          disable={!isCheckSelect}
          style={`${isCheckSelect ? "" : "text-red-500"}`}
          clickfuc={() => {
            setAnsAndN_Q();
            setisCheckSelect(false);
          }}
          label={"next"}
        />
      </QandA>
      {
        // {mockdata[nextQ].choice.map((ele, index) => {
        //   return (
        //     <Choice
        //     />
        //   );
        // })}
        /* <QandA Question={mockdata[nextQ]?.q}>
           style={`${usersvalue.checkedchoice[index] ? "underline" : ""}`}
                clickfuc={(e) => {
                  dispatch(
                    setValue({
                      Ques: ele.label,
                      Ans: ele.value,
                    })
                  );
                  dispatch(selectChoice(index));
                  setisCheckSelect(true);
                }}
                key={index}
                label={ele.label} */
      }
    </Card>
  );
};

export default HomePage;
