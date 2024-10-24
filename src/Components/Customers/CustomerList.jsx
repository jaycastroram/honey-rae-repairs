import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../Services/userService.jsx"
import "./Customers.css"
import { User } from "../../users/User.jsx"

export const CustomerList = () =>{
    const [customers, SetCustomers] = useState([])

    useEffect(()=>{
        getNonStaffUsers().then(customerArray => {
            SetCustomers(customerArray)
        })
    },[])
    return (
        <div className="customers">
            {customers.map((customerObj) => {
                return <User user={customerObj}/>
            })}
        </div>
    )
}



