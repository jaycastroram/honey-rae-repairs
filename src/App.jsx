import { CustomerList } from "./Components/Customers/CustomerList";
import { TicketList } from "./Components/Tickets/TicketList.jsx";
import { EmployeeList } from "./Components/Employees/EmployeeList.jsx";
import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "./Components/nav/NavBar.jsx";
import { Welcome } from "./Components/welcome/welcome.jsx";
import { CustomerDetails } from "./Components/Customers/CustomerDetails.jsx";
import { EmployeeDetails } from "./Components/Employees/EmployeeDetails.jsx";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            {/* <Welcome /> */}
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
          {""}
        </Route>
      </Route>
    </Routes>
  );
};
