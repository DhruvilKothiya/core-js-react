import React from "react";

export default function Hello() {
  return React.createElement(
    "div",
    { id: "hello", class: "dummyClass" },
    React.createElement("h1", null, "Hello Dhruvil")
  );
}
