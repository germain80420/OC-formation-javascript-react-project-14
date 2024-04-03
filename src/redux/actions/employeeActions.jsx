export const addEmployee = (employee)=>{
    return {
        type: "ADD_EMPLOYEE",
        payload:employee
            
        }
    }

export const getListEmployees = ()=>{
    return{
        type: "GET_EMPLOYEES",
    }
}

export const updateEmployees = (employees) => {
    return {
      type: "UPDATE_EMPLOYEES",
      payload: employees,
    }
}