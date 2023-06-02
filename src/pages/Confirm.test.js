import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Confirm from './Confirm';

describe('Confirm', () => {
  test('renders the component without errors', () => {
    render(<Confirm />);
  });

  test('validates form submission', () => {
    const { getByLabelText, getByText, queryByText } = render(<Confirm />);
    const confirmButton = getByText('Confirm Booking');

    fireEvent.click(confirmButton);

    expect(queryByText('Please enter a firstname')).toBeInTheDocument();
    expect(queryByText('Please enter a lastname')).toBeInTheDocument();
    expect(queryByText('Please enter a phone number')).toBeInTheDocument();
    expect(queryByText('Please enter an email')).toBeInTheDocument();

    const firstnameInput = getByLabelText('Enter Firstname');
    const lastnameInput = getByLabelText('Enter Lastname');
    const phoneInput = getByLabelText('Enter Phone No:');
    const emailInput = getByLabelText('Enter email');

    fireEvent.change(firstnameInput, { target: { value: 'John' } });
    fireEvent.change(lastnameInput, { target: { value: 'Doe' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    fireEvent.click(confirmButton);

    expect(queryByText('Please enter a firstname')).toBeNull();
    expect(queryByText('Please enter a lastname')).toBeNull();
    expect(queryByText('Please enter a phone number')).toBeNull();
    expect(queryByText('Please enter an email')).toBeNull();
  });

  test('navigates to success page on successful form submission', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      useNavigate: () => mockNavigate,
    }));

    const { getByLabelText, getByText } = render(<Confirm />);
    const confirmButton = getByText('Confirm Booking');

    const firstnameInput = getByLabelText('Enter Firstname');
    const lastnameInput = getByLabelText('Enter Lastname');
    const phoneInput = getByLabelText('Enter Phone No:');
    const emailInput = getByLabelText('Enter email');

    fireEvent.change(firstnameInput, { target: { value: 'John' } });
    fireEvent.change(lastnameInput, { target: { value: 'Doe' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    fireEvent.click(confirmButton);

    expect(mockNavigate).toHaveBeenCalledWith('/success');
  });
});
