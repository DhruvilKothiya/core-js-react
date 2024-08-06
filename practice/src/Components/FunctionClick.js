import React from 'react'



export default function FunctionClick() {
    function clickHandler (){
        console.log("Sucessfully run")
    }
  return (
    <div><button onClick={clickHandler}>Click</button></div>
  )
}
