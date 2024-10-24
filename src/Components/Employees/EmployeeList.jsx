// src/employees/EmployeeList.jsx
import { useEffect, useState } from "react";
import { getAllEmployees } from "../../Services/employeeService"; 
import { Employee } from "../../Employees/Employee"; 
import './Employee.css';

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]); 

  useEffect(() => {
    getAllEmployees().then((employeeData) => {
      setEmployees(employeeData); 
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  );
};
