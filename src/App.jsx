import './App.css';
import TicketCounter from './components/TicketCounter/TicketCounter';
import employees from './employeeData.js';
import Employee from './components/Employee/Employee';

function App() {
  const filteredEmployees = employees.filter(employee => {
    return employee.name && employee.role;
  })

  return (
    <div className="">
      <Employee employeeArr={filteredEmployees} />
    </div>
  );
}

export default App;
