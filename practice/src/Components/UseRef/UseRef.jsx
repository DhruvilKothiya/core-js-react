import React, { useRef } from 'react';

const UseRef = () => {
    const InputRef=useRef(null)
    function handleInput(){
        console.warn("function call")
        // InputRef.current.value="1000"
        // InputRef.current.focus();
        InputRef.current.style.display="none"
    }
    return (
        <div>
            <h1>Useref in react</h1>
            <input type="text" ref={InputRef}/>
            <button onClick={handleInput}>Handle Input</button>
        </div>
    );
}

export default UseRef;
