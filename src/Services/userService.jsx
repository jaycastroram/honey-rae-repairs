export const getNonStaffUsers = () => {
    return fetch("http://localhost:8088/users?isStaff=true").then(res => res.json())
    .catch((error) => console.error(`Error Loading employees`, error))
}