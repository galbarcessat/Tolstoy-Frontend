import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UrlsForm } from '../src/cmps/UrlsForm.jsx';

test('submits only valid URLs and does not include empty fields', () => {
    const mockHandleUrlsSubmit = jest.fn()

    render(<UrlsForm handleUrlsSubmit={mockHandleUrlsSubmit} />)

    // Enter URLs in the first three fields
    fireEvent.change(screen.getAllByLabelText(/Enter URL 1/)[0], { target: { value: 'https://example1.com' } })
    fireEvent.change(screen.getAllByLabelText(/Enter URL 2/)[0], { target: { value: 'https://example2.com' } })
    fireEvent.change(screen.getAllByLabelText(/Enter URL 3/)[0], { target: { value: 'https://example3.com' } })

    // Add another URL field
    fireEvent.click(screen.getByRole('button', { name: /Add Another URL/ }))

    // Enter URL in the newly added field
    fireEvent.change(screen.getAllByLabelText(/Enter URL 4/)[0], { target: { value: 'https://example4.com' } })

    // Click Submit
    fireEvent.click(screen.getByRole('button', { name: /Submit/ }))

    // Check that handleUrlsSubmit is called with only valid URLs
    expect(mockHandleUrlsSubmit).toHaveBeenCalledWith([
        'https://example1.com',
        'https://example2.com',
        'https://example3.com',
        'https://example4.com',
    ]);
});


// Mock function to pass as a prop
const mockHandleUrlsSubmit = jest.fn()

test('calls handleUrlsSubmit with the correct URLs on form submission', () => {
    render(<UrlsForm handleUrlsSubmit={mockHandleUrlsSubmit} />)

    // Simulate entering URLs into the form fields
    fireEvent.change(screen.getByLabelText(/Enter URL 1/i), { target: { value: 'https://example.com/1' } })
    fireEvent.change(screen.getByLabelText(/Enter URL 2/i), { target: { value: 'https://example.com/2' } })
    fireEvent.change(screen.getByLabelText(/Enter URL 3/i), { target: { value: 'https://example.com/3' } })

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }))

    // Verify that handleUrlsSubmit was called with the correct URLs
    expect(mockHandleUrlsSubmit).toHaveBeenCalledWith([
        'https://example.com/1',
        'https://example.com/2',
        'https://example.com/3',
    ]);
});
