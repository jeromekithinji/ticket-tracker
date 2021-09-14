import React from 'react'
import "./Employee.scss"
import TicketCounter from '../TicketCounter/TicketCounter';

const Employee = (props) => {
    const {employeeArr} = props;

    const employeeCard = employeeArr.map(employee => {
        <div>
            <h2>{employee.name}</h2>
            <h2>{employee.role}</h2>
        </div>
    })

    return (
        <div className="ticket">
            <div>{employeeCard}</div>
            <div className="ticket__counter">
                <TicketCounter />
            </div>
        </div>
    )
}

export default Employee;
