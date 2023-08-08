import React, {useState, useEffect, useContext, useCallback, useMemo} from 'react';
import CounterChild from './counter-child';
import { AppContext } from './state';


function Counter () {
    const [count, setConter] = useState(0);
    const [age, setAge] = useState(10);

    const {username} = useContext(AppContext);
    console.log(username);

    useEffect(() => {
      console.log('Called ....')
    }, [count]);

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