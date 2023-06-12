import React, { useState, useEffect } from "react";

const API_URL = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';

function NumberDisplay() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        fetch(API_URL).then((result) => {
            return result.json();
        }).then((data) => {
            console.log(data);
            setNumber(data);
        })
    }, [])

    const saveToStorage = () => {
        localStorage.setItem("savedNumber", number);
    }

    const loadFromStorage = () => {
        const savedNumber = JSON.parse(localStorage.getItem("savedNumber"))
        setNumber(savedNumber);
    }

    return (
        <div>
            <p>{ number }</p>
            <button onClick={() => {
                setNumber(number + 1);
            }}>Increment</button>
            <button onClick={() => {
                saveToStorage()
            }}>Save to Storage</button>
            <button onClick={() => {
                loadFromStorage()
            }}>Load from Storage</button>
        </div>
    )
}

export default NumberDisplay;