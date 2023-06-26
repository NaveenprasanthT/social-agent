import React from 'react';
import styles from '@/styles/ContactUs/LocateUs.module.css';

const LocateUs = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.leftSection}>
        <div className={styles.locateUsDiv}>
          <h3>Locate Us</h3>
        </div>
        <p>
        2724, 1st Floor, 31st Main Road, 16th Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
        </p>
      </div>
      <div className={`${styles.rightSection}`}>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.432567420657!2d77.65343541482295!3d12.912612690892936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae166d6876dc0b%3A0x9dc40c60fec016a0!2sSocial%20Agent!5e0!3m2!1sen!2sin!4v1623834509196!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className={styles.mapContainer}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocateUs;
