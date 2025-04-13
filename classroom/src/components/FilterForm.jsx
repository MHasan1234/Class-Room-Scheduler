import React, { useState } from 'react';
import './FilterForm.css'; 

const FilterForm = ({ onFilter }) => {
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (day && time) {
            onFilter(day, time);
        }
    };

    const handleDayChange = (event) => {
        setDay(event.target.value);
        };

        const handleTimeChange = (event) => {
            setTime(event.target.value);
            };    

    

    return (
        <form onSubmit={handleSubmit} className="filter-form">
            <label>
                Day:
                <select value={day} onChange={handleDayChange} required>
                    <option value="">-- Select Day --</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </select>
            </label>
            <br/><br/>
            <label>
                Time:
                <select value={time} onChange={handleTimeChange} required>
                    <option value="">-- Select Time --</option>
                    <option value="09:00AM - 10:30AM">09:00AM - 10:30AM</option>
                    <option value="10:30AM - 12:00AM">10:30AM - 12:00AM</option>
                    <option value="12:00AM - 01:00PM">12:00AM - 01:00PM</option>
                    <option value="01:30PM - 03:00PM">01:30PM - 03:00PM</option>
                    <option value="03:00PM - 04:30PM">03:00PM - 04:30PM</option>
                </select>
            </label>
           <br/><br/>
            <button type = "submit">Check Availibility</button>

           


        </form>
    );
};

export default FilterForm;