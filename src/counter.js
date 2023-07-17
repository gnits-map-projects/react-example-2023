import React, {useState} from 'react';
import CounterChild from './counter-child';

function Counter () {
    const [count, setConter] = useState(0);


    console.log('child rendered');
    return (
        <div>
            <div>My counter component</div>
            <div>Count: {count}</div>
            <button onClick={() => setConter(count + 1)}>Increase</button>
            <button onClick={() => setConter(count - 1)}>Decrease</button>
            <CounterChild count={count} setConter={setConter} />
        </div>
    )
}

export default Counter;