import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './component/Reservation';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


