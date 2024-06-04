"use client";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        // setCount(count + 1);
    }

    return(
        <>
            <button
                onClick={handleClick}
                className="bg-blue-500 px-4 py-2 text-white rounded"
            >
                Click me
            </button>
            <p>Count is: {count}</p>
        </>
    )

}