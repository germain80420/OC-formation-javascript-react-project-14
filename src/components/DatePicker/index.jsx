import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './datePicker.css'


const DatePicker = ({ label, selectedDate, onDateChange }) => {
  const [showCalendar, setShowCalendar] = useState(false)

  const handleClick = () => {
    setShowCalendar(!showCalendar)
  };

  const onChange = newDate => {
    onDateChange(newDate)
    setShowCalendar(false)
  }

  return (
    <div className='calendar'>
      <label>{label}</label>
      <input
        type="text"
        value={selectedDate ? selectedDate.toLocaleDateString('fr-FR'):""}
        onClick={handleClick}
        readOnly
      />
      {showCalendar && (
        <div className="calendar-wrapper">
            <Calendar className="calendar" onChange={onChange} value={selectedDate} />
        </div>
      )}
    </div>
  )
}

export default DatePicker;
