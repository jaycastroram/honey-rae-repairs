// src/employees/EmployeeList.jsx
import { useEffect, useState } from "react";
import { getAllEmployees, getEmployeesByUserId } from "../../Services/employeeService.js";
import "./Employee.css";
import { User } from "../../users/User";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((employeeData) => {
      setEmployees(employeeData);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return (
          <Link to={`/employees/${employeeObj.userId}`} key={employeeObj.id}>
            <User user={employeeObj.user} key={employeeObj.userId} />
          </Link>
        );
      })}
    </div>
  );
};
