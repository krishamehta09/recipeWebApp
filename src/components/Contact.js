import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: '',
    });
    const [submitted, setSubmitted] = useState(false); // New state for submission

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to an API
        console.log(formData);

        // Show thank-you message
        setSubmitted(true);

        // Reset form after submission
        setFormData({ name: '', email: '', query: '' });
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            {submitted ? (
                <p className="thank-you-message">
                    Thank you for contacting us, we will reach out soon!
                </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="query">Query</label>
                        <textarea
                            id="query"
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Contact;
