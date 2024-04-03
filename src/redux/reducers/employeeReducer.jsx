const initialState = {
    listEmployees:[]
}

export const employeeReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_EMPLOYEE":
        return{
            ...state,
            listEmployees: [...state.listEmployees, action.payload.employee],
        }
        case "GET_EMPLOYEES":
        return state.listEmployees

        case "UPDATE_EMPLOYEES":
      return {
        ...state,
        listEmployees: action.payload,
      }

        default:
            return state  
    }
}