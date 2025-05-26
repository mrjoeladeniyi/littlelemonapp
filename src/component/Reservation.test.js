import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reservation from './Reservation';

// Mock the fetchAPI
jest.mock('../utils/api', () => ({
    fetchAPI: jest.fn((date) => {
        // Simulate the actual API behavior
        return [
            '17:00',
            '18:00',
            '19:00',
            '20:00'
        ];
    }),
    submitAPI: jest.fn(() => true)
}));

describe('Reservation Component', () => {
    const mockProps = {
        formData: {
            date: '',
            time: '17:00',
            guests: 1,
            occasion: 'Birthday'
        },
        handleChange: jest.fn(),
        availableTimes: ['17:00', '18:00', '19:00', '20:00'],
        updateTimes: jest.fn(),
        submitForm: jest.fn()
    };

    beforeEach(() => {
        // Clear mock calls before each test
        jest.clearAllMocks();
    });

    test('renders Reservation component with form elements', () => {
        render(<Reservation {...mockProps} />);
        
        expect(screen.getByLabelText(/Select Date:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of Guests:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion:/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Make Reservation/i })).toBeInTheDocument();
    });

    test('updates available times when date changes', async () => {
        render(<Reservation {...mockProps} />);
        
        const dateInput = screen.getByLabelText(/Select Date:/i);
        const testDate = '2024-01-01';
        
        // Simulate date change
        fireEvent.change(dateInput, { 
            target: { 
                name: 'date',
                value: testDate 
            }
        });

        // Check if updateTimes was called with the correct date
        expect(mockProps.updateTimes).toHaveBeenCalledWith(testDate);
        expect(mockProps.handleChange).toHaveBeenCalledWith(
            expect.objectContaining({
                target: expect.objectContaining({
                    name: 'date',
                    value: testDate
                })
            })
        );
    });

    test('form can be submitted with updated times', () => {
        render(<Reservation {...mockProps} />);
        
        // Fill form
        const dateInput = screen.getByLabelText(/Select Date:/i);
        const guestsSelect = screen.getByLabelText(/Number of Guests:/i);
        const occasionSelect = screen.getByLabelText(/Occasion:/i);
        const form = screen.getByTestId('reservation-form');
        
        // Simulate user input
        fireEvent.change(dateInput, { 
            target: { 
                name: 'date', 
                value: '2024-01-01' 
            }
        });
        
        fireEvent.change(guestsSelect, { 
            target: { 
                name: 'guests', 
                value: '2' 
            }
        });
        
        fireEvent.change(occasionSelect, { 
            target: { 
                name: 'occasion', 
                value: 'Anniversary' 
            }
        });
        
        // Submit form using submit event
        fireEvent.submit(form);

        // Verify form submission
        expect(mockProps.submitForm).toHaveBeenCalled();
        expect(mockProps.handleChange).toHaveBeenCalledTimes(3);
    });
});