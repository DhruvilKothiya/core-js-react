import React, { useState } from "react";
export default function Car() {
  const [brand, setBrand] = useState("Ford");

  const changeBrand = () => {
    setBrand("Toyota");
  };

  return (
    <div>
      <h1>My Car</h1>
      <p>Brand: {brand}</p>
      <button onClick={changeBrand}>Change Brand</button>
    </div>
  );
}
