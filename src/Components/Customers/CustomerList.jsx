import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../Services/userService.jsx";
import "./Customers.css";
import { User } from "../../users/User.jsx";
import { Link } from "react-router-dom";

export const CustomerList = () => {
  const [customers, SetCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      SetCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return (
          <Link to={`/customers/${customerObj.id}`} key={customerObj.id}>
            <User user={customerObj} />
          </Link>
        );
      })}
    </div>
  );
};
