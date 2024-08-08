import React, { useState } from "react";

const Higherorder = () => {
  return (
    <div>
      <h1>HOC</h1>
      <HOC cmp={Counter}></HOC>
      <HOCBlue cmp={Counter}></HOCBlue>
      <HOCGreen cmp={Counter}></HOCGreen>
      <HOCYellow cmp={Counter}></HOCYellow>
    </div>
  );
};

function HOCYellow(props) {
  return (
    <h2 style={{ backgroundColor: "yellow", width: 200 }}>
        Yellow
      <props.cmp />
    </h2>
  );
}

function HOCGreen(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: 200 }}>
        Green
      <props.cmp />
    </h2>
  );
}

function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "blue", width: 200 }}>
        Blue
      <props.cmp />
    </h2>
  );
}

function HOC(props) {
  return (
    <h2 style={{ backgroundColor: "orange", width: 200 }}>
      <props.cmp />
    </h2>
  );
}

function Counter() {
  const [Count, setCount] = useState(0);
  return (
    <div>
      <h3>This is my Higher order components</h3>
      <h4>{Count}</h4>
      <button onClick={() => setCount(Count + 1)}>Update</button>
    </div>
  );
}

export default Higherorder;
