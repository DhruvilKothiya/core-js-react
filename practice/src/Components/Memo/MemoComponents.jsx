import React, { useState, useMemo } from "react";

export default function MemoComponents() {
  const [Count, setCount] = useState(0);
  const [item, setItem] = useState(100);
  const multicountMemo = useMemo(function multicount() {
    console.log("multiple");
    return Count * 5;
  },[Count]);

  // function multicount() {
  //   console.log("multiple")
  //   return Count * 5;
  // }
  return (
    <div>
      <h1>Usememo Hook in React </h1>
      <h2>Count:{Count}</h2>
      <h2>Item:{item}</h2>
      <h2>{multicountMemo}</h2>
      <button onClick={() => setCount(Count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
      MemoComponents
    </div>
  );
}
