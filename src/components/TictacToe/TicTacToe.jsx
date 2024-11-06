import "./TicTacToe.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";
import { useEffect, useRef, useState } from "react";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let tittleRef = useRef();
  let box1 = useRef();
  let box2 = useRef();
  let box3 = useRef();
  let box4 = useRef();
  let box5 = useRef();
  let box6 = useRef();
  let box7 = useRef();
  let box8 = useRef();
  let box9 = useRef();

  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}' >`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}' >`;
      data[num] = "o";

      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      tittleRef.current.innerHTML = `Congratulations: <img src = ${cross_icon} > Wins`;
    } else {
      tittleRef.current.innerHTML = `Congratulations: <img src = ${circle_icon} > Wins`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    tittleRef.current.innerHTML = "Tic Tac Toe Game In <span>React</span>";
    boxArray.map((e) => {
      e.current.innerHTML = "";
    });

    const [count, setCount] = useState(0);
  };

  // const a = useRef(0)

  // useEffect(() => {
  //   a.current = a.current + 1
  //   console.log(`rerendering... The value of ${a.current}`);
  // });
  const btnRef = useRef();

  useEffect(() => {
    console.log(`rerendering...`);
    btnRef.current.style.backgroundColor = "blue";
  });

  // useEffect(() => {
  //   alert("Count Was change");
  // }, [count]);

  return (
    <div className="container">
      <h1 className="tittle" ref={tittleRef}>
        Tic Tac Toe Game In <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            ref={box1}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            ref={box2}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            ref={box3}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            ref={box4}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            ref={box5}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            ref={box6}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            ref={box7}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            ref={box8}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            ref={box9}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>

      <div className="count">
        <p>The Count number is {count}</p>
        <button
          ref={btnRef}
          className="reset"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count Update
        </button>
        <button
        className="reset"
          onClick={() => {
            btnRef.current.style.display = "none";
          }}
        >
          Change Me
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
