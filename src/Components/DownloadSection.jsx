import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/DownloadSection.module.css'
import { FiArrowUpRight } from 'react-icons/fi'
import hashLogo from '../../public/assets/hashLogo.webp'

const DownloadSection = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone:'',
    email: '',
    date:'',
    p_require:'',
    number:'',
    message:'',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Access the form data

    setFormData({
        name: '',
        phone:'',
        email: '',  
      });
  };

  return (
    <div className={styles.sectionWrap}>
      <form className={styles.formWrap} action="">
        <Image className={styles.logo} src={hashLogo} alt='logo' />
        <div className={styles.center}>
          <h2>Download our <span className={styles.ForLargeScreen}>e-Brochure.</span><span className={styles.ForMobile}>website starter guide.</span></h2>
          <div className={styles.inputWrapper}>
            <div className={styles.inputWrap}>
              <label className={styles.lable} htmlFor="name">Name</label>
              <input className={styles.input} type="text" name="name" id="name" placeholder='Enter your name' value={formData.name}
                onChange={handleInputChange}/>
            </div>
            <div className={styles.inputWrap}>
              <label className={styles.lable} htmlFor="name">Contact Number</label>
              <input className={styles.input} type="text" name="phone" id="name" placeholder='Enter your contact number' value={formData.phone}
              onChange={handleInputChange}/>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrap} onClick={handleSubmit}>
          <div className={styles.btn}>
            <FiArrowUpRight className={styles.arrowIcon} />
          </div>
          <div className={styles.btn1}>
            <button>SEND</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DownloadSection