import React from "react";

function CounterChild ({count, setConter}) {
    console.log("Counter child rendered");
    return (
      <div>
        <hr />
        <div>Child counter component</div>
        <div>Count Value from child component: {count}</div>
        <button onClick={() => setConter(count + 1)}>Child button for increment</button>
      </div>
    )
}

export default CounterChild;