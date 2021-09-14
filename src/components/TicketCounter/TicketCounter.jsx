import React, {useState} from 'react';
import "./TicketCounter.scss"

const TicketCounter = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {        
        setCounter(counter + 1);
    };

    const handleDecrement = () => {        
        setCounter(counter - 1);
    };

    return (
        <div className="counter">
            <p>{counter}</p>
            <p onClick={handleIncrement}>+</p>
            <p onClick={handleDecrement}>-</p>
        </div>
    )
}

export default TicketCounter;
