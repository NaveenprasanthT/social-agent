import React from 'react';
import styles from '@/styles/ContactUs/ContactUs.module.css';
import Button from '../Button';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link';

const ContactForm = () => {
  return (
    <div className={styles['contact-container']}>
      <div className={styles['left-side']}>
        <div className={styles.leftSideContent}>
          <h2>Contact us</h2>
          <div className={styles.leftSideInfo}>
            <div>
              <h5>Email us</h5>
              <p>info@socialagent.in</p>
            </div>
            <div>
              <h5>Call us</h5>
              <p>+91 8971719955</p>
            </div>
          </div>
        </div>
        <div className={styles.socialIcons}>
          <Link href='https://www.instagram.com/socialagent_official/' target='_blank'><AiOutlineInstagram className={styles.socialIcon} /></Link>
          <Link href='https://www.facebook.com/socialagent.in' target='_blank'><FaFacebookF className={styles.socialIcon} /></Link>
          <Link href='https://twitter.com/social__agent' target='_blank'><AiOutlineTwitter className={styles.socialIcon} /></Link>
          <Link href='https://www.linkedin.com/company/socialagent' target='_blank'><FaLinkedinIn className={styles.socialIcon} /></Link>
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
