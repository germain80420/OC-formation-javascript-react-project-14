import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { DataTable } from "react-datatable-library-bg"
//import { useState } from "react"
//import { generateEmployee } from "../../utils/generate"
//import { useDispatch } from "react-redux"
// import {
//   addEmployee,
//   updateEmployees,
// } from "../../redux/actions/employeeActions"

function EmployeesList() {
  //const [nbEmployees, setNbEmployees] = useState(0)
  // const dispatch = useDispatch()
  let listEmployees

  // const addEmployees = (event) => {
  //   event.preventDefault()
  //   for (let i = 0; i < nbEmployees; i++) {
  //     let employee = generateEmployee(false)
  //     dispatch(addEmployee({ employee }))
  //   }
  // }
  // const clearEmployees = () => {
  //   dispatch(updateEmployees([]))
  // }
  listEmployees = useSelector((state) => state.listEmployees)
  const columns = [
    { title: "First Name", data: "firstname" },
    { title: "Last Name", data: "lastname" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ]
  return (
    <div>
      <DataTable data={listEmployees} columns={columns} />
      <NavLink to="/">Home</NavLink>
      <br />

      {/* <button onClick={clearEmployees}>VIDER LES EMPLOYES</button>
      <form onSubmit={addEmployees}>
        <input
          type="number"
          value={nbEmployees}
          onChange={(e) => setNbEmployees(e.target.value)}
        />
        <input type="submit" value="GENERATE EMPLOYEES" />
      </form> */}
    </div>
  )
}
export default EmployeesList
