import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

function Example(props) {
    const [count, setCount] = useState(0);
    //callback runs when one of its dependencies update.
    const handleIncrease = useCallback(() => {
        console.log("Callback hook counter: ", count);
        setCount(prevCounter => prevCounter + 1);
    }, []);

    //useref example
    const [inputValue, setInputValue] = useState("");
    const counter = useRef(0);

    useEffect(() => {
        console.log(counter.current);
        counter.current = counter.current + 1;
    });

    // const memoizedValue = useMemo(() => {
    //     console.log("Expensive computation in useMemo");
    //     return count * 2;
    // }, [count]);


    return (
        <div>
            <br></br>
            <br></br>
            <h1>UseRef Hook</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {counter.current}</h1>

            <h1>useCallback Hook</h1>
            <h2>Value: {count}</h2>
            <button onClick={handleIncrease}>
                Increase
            </button>

            {/* <h1>useMemo Hook</h1>
            <h2>Memoized Value: {memoizedValue}</h2> */}

        </div>

    );
}

export default Example;