import { NavLink } from "react-router-dom"
import FormEmployee from "../../components/FormEmploye"

function CreateEmployee() {
  return (
    <div>
      <h1>HRnet</h1>
      <NavLink to="/employeesList">View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <FormEmployee />
    </div>
  )
}
export default CreateEmployee
