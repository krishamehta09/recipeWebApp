import React from 'react';
import '../App.css'; 
import aboutImage from '../food.jpg';

const About = () => {
    return (
        <div className="about-container">
            
            <main className="about-content">
                <h1>About Us</h1>
                <img src={aboutImage} alt="About Us" className="about-image" />
                <p>
                    Welcome to the FoodRecipe Web Application!!
                </p>
                <p>
                    Here you have an option of searching for existing recipes or creating your own recipes and adding details about them.
                </p>
                <p>
                    Thank you for visiting our website. If you have any questions or feedback, please feel free to <a href="/contact">contact us</a>. We look forward to hearing from you!
                </p>
            </main>
            
        </div>
    );
};

export default About;
