
const BookingForm = ({formData, handleChange, availableTimes, updateTimes, submitForm}) => {
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form submitted:', formData);
    // };

    const handleDateChange = (e) => {
        const { value } = e.target;
        // * First update the times
        updateTimes(value);
        // * Then update the form data
        handleChange({
            target: {
                name: 'date',
                value: value
            }
        });
    };

    return (
        <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={submitForm} data-testid="reservation-form">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Reservation Details</h2>
            <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Select Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleDateChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <ul className="mt-2 text-sm text-gray-600">
                    {availableTimes.map((time, index) => (
                        <li key={index} className="py-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="time"
                                    value={time}
                                    checked={formData.time === time}
                                    onChange={handleChange}
                                    className="form-radio text-blue-600 focus:ring-blue-500"
                                />
                                <span className="ml-2">{time}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
             <div className="mb-4">
                <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">Number of Guests:</label>
                <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    {Array.from({ length: 10 }, (_, i) => (
                        <option key={`guest-${i + 1}`} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-6">
                <label htmlFor="occasion" className="block text-gray-700 text-sm font-bold mb-2">Occasion:</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                Make Reservation
            </button>
        </form>
    );

};

export default BookingForm;