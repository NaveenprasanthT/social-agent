import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '@/styles/StartProjectInform.module.css';
import img from '../../public/assets/heroImage.png';

const StartProjectInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const router = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
    router.push('/Start-A-ProjectSubmit');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const isFormValid = formData.name && formData.email && formData.phone;

  return (
    <div className={styles.startProjectInfoWrap}>
      <div className={styles.left}>
      <div>
      <h3>Get on-board with us</h3>
      <p>Extend your support and reach out to us with your name and contact information.</p>
      </div>
        <Image className={styles.image} src={img} alt="image" />
      </div>
      <div className={styles.right}>
        <form className={styles['contact-form']} onSubmit={handleFormSubmit}>
          <h3 className={styles['right-heading']}>Contact Information</h3>
          <div className={styles['form-field']}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles['contact-field']}>
            <div className={styles['form-field']}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles['form-field']}>
              <label htmlFor="phone">Contact Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 -"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles['submit-button']}>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartProjectInfo;
