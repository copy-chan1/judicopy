// Book.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Book.css'; // Import the CSS file for styling

function Book() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate phone number
  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/; // 10-digit phone number validation
    return phoneRegex.test(phone);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (!isValidPhoneNumber(formData.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Booking successful!');
        navigate('/'); // Redirect to the home page after success
      } else {
        alert(`Error: ${result.error || 'An error occurred'}`); // Provide a fallback error message
      }
    } catch (error) {
      alert('Failed to send booking. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle cancel booking
  const handleCancel = () => {
    setFormData({
      name: '',
      phone: '',
      pickup: '',
      destination: '',
    });
    navigate('/'); // Redirect to the home page or desired page
  };

  return (
    <div className="booking-container">
      <h2>Book a Cab</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength="10" // Restrict input length
            className="form-input"
          />
        </label>
        <label>
          Pickup Location:
          <input
            type="text"
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? 'Booking...' : 'Book Now'}
        </button>
        <button type="button" className="cancel-button" onClick={handleCancel}>
          Cancel Booking
        </button>
      </form>
    </div>
  );
}

export default Book;
