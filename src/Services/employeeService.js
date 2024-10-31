export const getAllEmployees = () => {
  return fetch("http://localhost:8088/employees?_expand=user").then((res) =>
    res.json()
  );
};
// employeeService.js
export const getEmployeesByUserId = async (userId) => {
  const response = await fetch(`http://localhost:8088/employees?userId=${userId}&_expand=user`);
  if (!response.ok) {
    console.error("Failed to fetch employee data:", response.statusText);
    return [];
  }
  return await response.json();
};

