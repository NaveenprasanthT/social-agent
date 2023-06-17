import React from 'react';
import styles from '@/styles/ContactUs/ContactUs.module.css';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
  return (   
    <div className={styles['contact-container']}>
      <div className={styles['left-side']}>
        <h2>Contact Us</h2>
        <h5>Email us</h5>
        <p>info@socialagent.in</p>
        <div className={styles['space']}></div>
        <h5>Call us</h5>
        <p>+91 8971719955</p>
        <div className={styles['socialIcons']}>
          <a href="https://www.instagram.com/your-instagram-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/your-facebook-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com/your-twitter-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/your-linkedin-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <img className={styles['intersection-image']} src="/assets/heroImage.png" alt="Intersection Image" />  
        </div>
      <div className={styles['right-side']}>
        <form className={styles['contact-form']}>
          <h3 className={styles['right-heading']}>Lets <span className={styles['heading-span']}>Talk</span></h3>
          <div className={styles['form-field']}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className={styles['form-field']}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
          </div>
          <div className={styles['form-field']}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />
          </div>
          <div className={styles['form-field']}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Description" rows="5" required></textarea>
          </div>
          <div className={styles['submit-button']}>
          <Button value="Submit" />          
          </div>         
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
