// src/employees/Employee.jsx
import React from 'react';

export const Employee = ({ employee }) => {
  return (
    <div className="employee-card">
      {/* Access employee's user data */}
      <h2>{employee.user?.fullName}</h2>
      <p>Email: {employee.user?.email}</p>
      <p>Specialty: {employee.specialty}</p>
      <p>Rate: ${employee.rate}/hour</p>
    </div>
  );
};

