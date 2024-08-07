import React from "react";
import "../Styleshee/Style.css";

export default function Stylesheet( props ) {
  let classname = props.primary ? 'primary' : '';

  return (
    <div>
      <h1 className={classname}>Stylessheet</h1>
    </div>
  );
}
