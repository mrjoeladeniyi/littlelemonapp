import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const BookingForm = ({formData, handleChange, availableTimes, updateTimes, submitForm}) => {
      const handleSubmit = (values, { setSubmitting }) => {
        submitForm(values);
        setSubmitting(false);
    };

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

    const validationSchema = Yup.object({
        date: Yup.date().required('Required'),
        time: Yup.string().required('Required'),
        guests: Yup.number().required('Required').min(1).max(10),
        occasion: Yup.string().required('Required')
    });

    return (
        <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, setFieldValue }) => (
                <Form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" data-testid="reservation-form">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Reservation Details</h2>
                    
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Select Date:</label>
                        <Field
                            type="date"
                            id="date"
                            name="date"
                            onChange={(e) => {
                                handleDateChange(e);
                                setFieldValue('date', e.target.value);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.date && touched.date && (
                            <div className="text-red-500 text-sm mt-1">{errors.date}</div>
                        )}
                        
                        <div className="mt-2">
                            {availableTimes.map((time, index) => (
                                <label key={index} className="block py-1">
                                    <Field
                                        type="radio"
                                        name="time"
                                        value={time}
                                        className="form-radio text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2">{time}</span>
                                </label>
                            ))}
                        </div>
                        {errors.time && touched.time && (
                            <div className="text-red-500 text-sm mt-1">{errors.time}</div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">Number of Guests:</label>
                        <Field
                            as="select"
                            id="guests"
                            name="guests"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                            {Array.from({ length: 10 }, (_, i) => (
                                <option key={`guest-${i + 1}`} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </Field>
                        {errors.guests && touched.guests && (
                            <div className="text-red-500 text-sm mt-1">{errors.guests}</div>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="occasion" className="block text-gray-700 text-sm font-bold mb-2">Occasion:</label>
                        <Field
                            as="select"
                            id="occasion"
                            name="occasion"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </Field>
                        {errors.occasion && touched.occasion && (
                            <div className="text-red-500 text-sm mt-1">{errors.occasion}</div>
                        )}
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Make Reservation
                    </button>
                </Form>
            )}
        </Formik>
    );

};

export default BookingForm;