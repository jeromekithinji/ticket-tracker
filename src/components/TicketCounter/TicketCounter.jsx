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
            <span className="counter__buttons">
                <p onClick={handleDecrement}>-</p>
                <p onClick={handleIncrement}>+</p>
            </span>
            
        </div>
    )
}

export default TicketCounter;
