import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reservation from './Reservation';

// Mock the fetchAPI
jest.mock('../utils/api', () => ({
    fetchAPI: jest.fn((_date) => {
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
        
        await act(async () => {
            fireEvent.change(dateInput, { 
                target: { 
                    name: 'date',
                    value: testDate 
                }
            });
        });

        await waitFor(() => {
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
    });

    test('displays validation errors for invalid form submission', async () => {
        render(<Reservation {...mockProps} />);
        
        const form = screen.getByTestId('reservation-form');
        const dateSelect = screen.getByLabelText(/Select Date:/i);

        await act(async () => {
            fireEvent.submit(form);
        });

        await waitFor(() => {
            expect(screen.getByText('Required')).toBeInTheDocument();
            expect(mockProps.submitForm).not.toHaveBeenCalled();
        });

        await act(async () => {
            fireEvent.change(dateSelect, {
                target: {
                    name: 'date',
                    value: ''
                }
            });
            fireEvent.submit(form);
        });

        await waitFor(() => {
            expect(screen.getByText('Required')).toBeInTheDocument();
            expect(mockProps.submitForm).not.toHaveBeenCalled();
        });
    });

    test('form can be submitted with valid data', async () => {
        render(<Reservation {...mockProps} />);
        
        const dateInput = screen.getByLabelText(/Select Date:/i);
        const guestsSelect = screen.getByLabelText(/Number of Guests:/i);
        const occasionSelect = screen.getByLabelText(/Occasion:/i);
        const form = screen.getByTestId('reservation-form');
        
        // Handle each field change separately
        await act(async () => {
            fireEvent.change(dateInput, { 
                target: { 
                    name: 'date', 
                    value: '2024-01-01' 
                }
            });
        });

        await act(async () => {
            fireEvent.change(guestsSelect, { 
                target: { 
                    name: 'guests', 
                    value: '2' 
                }
            });
        });

        await act(async () => {
            fireEvent.change(occasionSelect, { 
                target: { 
                    name: 'occasion', 
                    value: 'Anniversary' 
                }
            });
        });

        // Submit form
        await act(async () => {
            fireEvent.submit(form);
        });

        // Wait for all updates to complete
        await waitFor(() => {
            expect(mockProps.handleChange).toHaveBeenCalledTimes(1);
            expect(mockProps.submitForm).toHaveBeenCalledWith(
                expect.objectContaining({
                    date: '2024-01-01',
                    guests: '2',
                    occasion: 'Anniversary'
                })
            );
        });
    });
});