import React from 'react';
import styles from '@/styles/StartProjectsubmit.module.css';

const StartProjectsubmit = () => {
  return (
    <div className={styles['component-container']}>
     
      <div className={styles.card}> 
      <img src="/assets/mail.png" alt="Card Image" />
      <h2>Thank you for submitting your request.</h2>
      <p>Our team will be in touch with you soon.</p>
      <button onClick={() => {window.location.href = '/'}}>Home</button></div> 
      <img className={`${styles['bottom-left-image']} ${styles.zoomed}`} src="/assets/heroImage.png" alt="Intersecting Image" />
    </div>
    
  );
};

export default StartProjectsubmit;
