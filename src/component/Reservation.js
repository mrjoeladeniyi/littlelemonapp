import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const BookingForm = ({formData, handleChange, availableTimes, updateTimes, submitForm}) => {
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await submitForm(values);
            setSubmitting(false);
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitting(false);
        }
    };

    const handleDateChange = async (e) => {
        const { value } = e.target;
        try {
            // First update the times
            await updateTimes(value);
            // Then update the form data
            handleChange({
                target: {
                    name: 'date',
                    value: value
                }
            });
        } catch (error) {
            console.error('Date change error:', error);
        }
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('First name is required')
            .min(2, 'First name must be at least 2 characters'),
        lastName: Yup.string()
            .required('Last name is required')
            .min(2, 'Last name must be at least 2 characters'),
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
                <Form className="w-[90%] h-[70%] md:h-[70%] sm:h-[80%] sm:w-[90%] md:w-[50%] lg:w-[50%] xl:w-[20%] mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md mt-20 sm:mt-24 md:mt-32" data-testid="reservation-form">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Reservation Details</h2>
                    
                    {/* Name fields container */}
                    <div className="flex gap-4 mb-4">
                        {/* First Name field */}
                        <div className="flex-1">
                            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <Field
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            {errors.firstName && touched.firstName && (
                                <div className="text-red-500 text-sm mt-1">{errors.firstName}</div>
                            )}
                        </div>

                        {/* Last Name field */}
                        <div className="flex-1">
                            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <Field
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            {errors.lastName && touched.lastName && (
                                <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                            Select Date <span className="text-red-500">*</span>
                        </label>
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
                    </div>

                    {/* Updated Time Selection */}
                    <div className="mb-4">
                        <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">
                            Select Time <span className="text-red-500">*</span>
                        </label>
                        <Field
                            as="select"
                            id="time"
                            name="time"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                            <option value="">Select a time</option>
                            {availableTimes.map((time, index) => (
                                <option key={`time-${index}`} value={time}>
                                    {time}
                                </option>
                            ))}
                        </Field>
                        {errors.time && touched.time && (
                            <div className="text-red-500 text-sm mt-1">{errors.time}</div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">
                            Number of Guests <span className="text-red-500">*</span>
                        </label>
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
                        <label htmlFor="occasion" className="block text-gray-700 text-sm font-bold mb-2">
                            Occasion <span className="text-red-500">*</span>
                        </label>
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
                        className="w-full bg-[#f5cf14] text-[#495e57] font-bold py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors"
                    >
                        Make Reservation
                    </button>
                </Form>
            )}
        </Formik>
    );

};

export default BookingForm;