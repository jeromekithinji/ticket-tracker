import React from 'react'
import "./Employee.scss"
import TicketCounter from '../TicketCounter/TicketCounter';

const Employee = (props) => {
    const {employeeArr} = props;

    const employeeCard = employeeArr.map(employee => (
        <div className="ticket">
            <h2>{employee.name}</h2>
            <h2>{employee.role}</h2>
            <div className="ticket__counter">
                <TicketCounter numberOfTickets={employee.numberOfTickets}/>
            </div>
        </div>
    ))

    return (
        <>
            {employeeCard}
        </>
    )
}

export default Employee;
