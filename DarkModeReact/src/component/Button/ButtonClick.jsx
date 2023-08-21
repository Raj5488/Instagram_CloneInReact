    import React, { useState } from 'react';
    import "./Button.css"
    function Counter() {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
        <h1>Counter Value: {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
}
    export default Counter;
