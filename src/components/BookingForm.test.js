import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders form inputs and validates form submission', () => {
    render(<BookingForm />);

    // Fill in form inputs
    const dateInput = screen.getByLabelText('Choose Date');
    const timeInput = screen.getByLabelText('Choose Time');
    const guestsInput = screen.getByLabelText('No. of Guests');
    const occasionInput = screen.getByLabelText('Occasion');

    fireEvent.change(dateInput, { target: { value: '2023-06-01' } });
    fireEvent.change(timeInput, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionInput, { target: { value: 'birthday' } });

    // Submit the form
    const submitButton = screen.getByText('Make Reservation');
    fireEvent.click(submitButton);

    // Assert that form submission was successful
    expect(screen.getByText('Booking Summary')).toBeInTheDocument();
    expect(screen.getByText('Chosen Date is: 2023-06-01')).toBeInTheDocument();
    expect(screen.getByText('Chosen Time is: 18:00')).toBeInTheDocument();
    expect(screen.getByText('The Occasion is: birthday')).toBeInTheDocument();
    expect(screen.getByText('Number of Guests are: 4')).toBeInTheDocument();

    // Reset the form
    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);

    // Assert that form values are reset
    expect(dateInput.value).toBe('');
    expect(timeInput.value).toBe('');
    expect(guestsInput.value).toBe('');
    expect(occasionInput.value).toBe('');
  });

  // Add more tests for form validation and error messages if needed
});
