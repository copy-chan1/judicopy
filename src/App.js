// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Book from './components/Book';
import './App.css'; // Importing the CSS file

function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to JudiCabs</h1>

      <section className="hero">
        <h2>Your Ride, Your Way</h2>
        <p>Experience comfortable and reliable cab services.</p>
        <Link to="/book">
          <button className="hero-button">Book Now</button>
        </Link>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          At JudiCabs, we provide reliable and comfortable cab services to meet your travel needs. Our experienced drivers and well-maintained vehicles ensure a safe and enjoyable journey.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>🚖 Airport Transfers</li>
          <li>🌆 City Tours</li>
          <li>🎉 Event Transportation</li>
          <li>🏢 Corporate Travel</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          For bookings and inquiries, please call us at <strong>04362-27399</strong> or email us at{' '}
          <strong>cabbaskar@gmail.com</strong>.
        </p>
        <h3>Our Address</h3>
        <p>No.7, M.S Complex, Collector Murugaraj Nagar, Cauvery Nagar, Madhakottai Road, Thanjavur-5.</p>
        <h3>Working Hours</h3>
        <p>Monday to Friday: 8 AM - 10 PM</p>
        <p>Saturday: 9 AM - 11 PM</p>
        <p>Sunday: Closed</p>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;
