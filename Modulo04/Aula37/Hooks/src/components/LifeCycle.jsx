import { useState, useEffect } from "react";

function TimerComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {        
        const timerId = setInterval(() => {
            setCount(prevCount => prevCount +1)
        }, 1000)
        return () => {
            clearInterval(timerId)
            console.log('Timer foi limpo')
        }
    }, [count])

    return (
        <div id="content">
            <h2>Contador: {count}</h2>
            <hr/>
        </div>
        
    )
        
}

export default TimerComponent