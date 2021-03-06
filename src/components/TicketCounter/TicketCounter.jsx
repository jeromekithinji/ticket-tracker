import React, {useState} from 'react';
import "./TicketCounter.scss"

const TicketCounter = ({ numberOfTickets }) => {

    const [counter, setCounter] = useState(numberOfTickets);

    const handleIncrement = () => {        
        setCounter(counter + 1);
    };

    const handleDecrement = () => { 
        if(counter > 0){
            setCounter(counter - 1);
        }
    };

    return (
        <div className="counter">
            <p>{counter}</p>
            <span className="counter__buttons">
                <p className="counter__button" onClick={handleDecrement}>-</p>
                <p className="counter__button" onClick={handleIncrement}>+</p>
            </span>
        </div>
    )
}

export default TicketCounter;
