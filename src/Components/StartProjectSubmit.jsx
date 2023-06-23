import React from 'react';
import styles from '@/styles/StartProjectsubmit.module.css';

const StartProjectsubmit = () => {
  return (
    <div className={styles['component-container']}>
     
      <div className={styles.card}> 
      <img src="/assets/mail.png" alt="Card Image" />
      <h2>Thank you for your interest in our services.</h2>
      <p>Rest assured, We will get in touch with you soon!
      </p>
      <button onClick={() => {window.location.href = '/'}}>Home</button></div> 
      <img className={`${styles['bottom-left-image']} ${styles.zoomed}`} src="/assets/heroImage.png" alt="Intersecting Image" />
    </div>
    
  );
};

export default StartProjectsubmit;
