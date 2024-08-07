import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useMemo, useState } from "react";

export default function MemoComponents() {
  const [mynum, setMyNum] = useState(0);
  const [show, setShow] = useState(true);

  const getValue = () => {
    return setMyNum(mynum + 1);
  };

  useMemo(() => {
    const checkData = countNumber(mynum);
  }, [mynum]);

  
  const countNumber = (num) => {
    console.log("`file:Memo.jsx `line 12-countNumb`num", num);
    for (let i = 0; i < 10000000; i++) {}
    return num;
  };

  console.log("redering compoenttn");
  return (
    <div>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p>My new Number{checkData}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "You Clicked me" : "click me plz"}
      </button>
    </div>
  );
}
