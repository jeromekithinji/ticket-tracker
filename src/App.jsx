import './App.scss';
import employees from './employeeData.js';
import Employee from './components/Employee/Employee';

function App() {
  const filteredEmployees = employees.filter(employee => {
    return employee.name && employee.role;
  })

  return (
    <div className="App">
      <h1>Ticket Tracker</h1>
      <div className="employee-tickets">
        <Employee employeeArr={filteredEmployees} />
      </div>
    </div>
  );
}

export default App;
