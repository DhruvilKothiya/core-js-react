import React, { useState } from "react";

export default function ListandKey() {
  const [items, setIteams] = useState(["Dhruvil", "Divyesh", "Dev"]);

  return (
    <div>
      <h1>Item List </h1>
      <ul>
        {items.map((a) => {
            console.log(a);
          return <li>{a}</li>;
        })}
      </ul>
      <button onClick={() => setIteams([...items, `items${items.length + 1}`])}>
        Add data
      </button>
    </div>
  );
}
