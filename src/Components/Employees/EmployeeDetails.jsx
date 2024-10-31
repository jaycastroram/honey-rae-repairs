import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployeesByUserId } from "../../Services/employeeService";
import "./Employee.css";

export const EmployeeDetails = () => {
  const { employeeId } = useParams(); 
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    if (employeeId) {
      getEmployeesByUserId(employeeId).then((data) => {
        if (data.length > 0) {
          setEmployee(data[0]); // Set the first match
        } else {
          console.warn("No employee found with userId:", userId);
        }
      });
    }
  }, [employeeId]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email :</span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty :</span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate :</span>
        {employee.rate}
      </div>
    </section>
  );
};
