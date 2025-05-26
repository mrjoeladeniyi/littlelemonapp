import React from 'react';
import { useReducer } from 'react';
import BookingPage from './BookingPage';
import Specials from './Specials';
import Reservation from './Reservation';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { fetchAPI, submitAPI } from '../utils/api';
import HomePage from './HomePage';
import ConfirmedBooking from './ConfirmedBooking';

const Main = () => {
    // * State to manage form data for reservations
    // * This state will be passed to the Reservation and BookingPage component
    const initialState = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];
    const timeReducer = (state, action) => {
        switch(action.type) {
            case 'UPDATE_TIMES':
                // Use the fetchAPI to get available times
                return fetchAPI(new Date(action.date));
            default:
                return state;
        }
    }

    const [availableTimes, dispatch] = useReducer(timeReducer, initialState);

    const updateTimes = (date) => {
        if (!date) {
            console.error('Date is required for updating times');
            return;
        }
        dispatch({ type: 'UPDATE_TIMES', date: date });
    };

    const [formData, setFormData] = useState({
        time: availableTimes[0],
        date: '',
        guests: 1,
        occasion: 'Birthday'
    });

     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        const isSuccess = submitAPI(formData);
        if (isSuccess) {
            // Navigate to confirmation page only if submission is successful
            navigate('/confirmation');
        } else {
            // Handle submission failure
            alert('Failed to submit reservation. Please try again.');
        }
    };

    return (

        <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage formData={formData}  />} />
            <Route path="/specials" element={<Specials />} />
            <Route path='/confirmation' element={<ConfirmedBooking />} />
            <Route path="/reservations" element={<Reservation 
            formData={formData} 
            handleChange={handleChange} 
            updateTimes={updateTimes} 
            availableTimes={availableTimes}
            submitForm={submitForm}
            />} />
        </Routes>
        </>
    );
};


export default Main;