import React from 'react';
import BookingPage from './BookingPage';
import Specials from './Specials';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

const Main = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/specials" element={<Specials />} />
        </Routes>
        </>
    );
};


export default Main;