import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import CreateEmployee from './pages/CreateEmployee'
import EmployeesList from './pages/EmployeesList'
import { store, persistor }  from './redux/store.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
   <Router>
    <Routes>
      <Route path='/' element={<CreateEmployee/>}/>
      <Route path='/employeesList' element={<EmployeesList/>}/>
    </Routes>
   </Router>
   </PersistGate>
   </Provider>
  </React.StrictMode>
)

