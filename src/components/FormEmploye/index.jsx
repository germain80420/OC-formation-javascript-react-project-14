import './formEmployee.css'
import DatePicker from '../DatePicker'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../redux/actions/employeeActions'
import Modal from '../Modal'
import { states, departments } from '../../data/const.js'
import { generateEmployee } from '../../utils/generate.js'

function FormEmployee(){


    const statesWithId = states.map((state)=>({...state,id:uuidv4()}))
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState()
    const [startDate, setStartDate] = useState()
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("AL")
    const [zipCode, setZipCode] = useState("")
    const [department, setDepartment] = useState("Sales")

    const dispatch = useDispatch()
    const generatePeople = () => {
       const employee = generateEmployee(true)
        setFirstName(employee.firstname)
        setLastName(employee.lastname)
        setDateOfBirth(employee.dateOfBirth)
        setStartDate(employee.startDate)
        setStreet(employee.street)
        setCity(employee.city)
        setState(employee.state.abbreviation)
        setZipCode(employee.zipCode)
        setDepartment(employee.department)
      }
    const saveEmployee=(event)=>{
        event.preventDefault()
        let employee = {
            id: uuidv4(),
            firstname:firstName,
            lastname:lastName,
            dateOfBirth:dateOfBirth?.toISOString(),
            startDate:startDate?.toISOString(),
            street:street,
            city:city,
            state:state,
            zipCode:zipCode,
            department:department
        }
        setIsModalOpen(true)
        setFirstName("")
        setLastName("")
        
  dispatch(addEmployee({ employee }))
       

    }

    
    return(
        <div className="calendar-container">
            <form  onSubmit={saveEmployee}>
            <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete={`no-autocomplete`} 
                />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete={`no-autocomplete`}
                />

                <DatePicker
                    label="Date Of Birth"
                    selectedDate={dateOfBirth}
                    onDateChange={setDateOfBirth}
                />

                <DatePicker
                    label="Start Date"
                    selectedDate={startDate}
                    onDateChange={setStartDate}
                />
                
                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" 
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    autoComplete={`no-autocomplete`}                     />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    autoComplete={`no-autocomplete`}                     />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state" value={state} onChange={(e) => setState(e.target.value)}>
                        {
                           statesWithId.map((state)=>(
                                
                                <option key={state.id} value={state.abbreviation}>{state.name}</option>
                                
                                ))
                        }
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="text" 
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    autoComplete={`no-autocomplete`} />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
                    {
                        departments.map((dept)=>(
                            <option key={uuidv4()}>{dept}</option>
                        ))
                    }
                </select>
                <button type='submit'>Save</button>
            </form>
            <button onClick={generatePeople}>Generate People</button>


            {isModalOpen && <Modal message="Employee added successfully!" onClose={() => setIsModalOpen(false)} />}
  
        </div>
    )
}
export default FormEmployee