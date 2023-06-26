import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/DownloadSection.module.css'
import { FiArrowUpRight } from 'react-icons/fi'
import hashLogo from '../../public/assets/hashLogo.webp'
import styled from 'styled-components';

  const InputWrapper1 = styled.div`
    display: flex;
    gap: 4%;
    width: 80%;
    margin-top: 4%;
    position: absolute;
    top: 5%;
    right: ${({data})=>(data ? '-100%' : '10%')};
    transition: all 1s ease-in-out;
    @media (max-width: 650px){
      transition: all 2s ease-in-out;
      gap : .7rem;
    }
  `
  const InputWrapper2 = styled.div`
    display: flex;
    gap: 4%;
    width: 50%;
    margin-top: 4%;
    position: absolute;
    top : 5%;
    left: ${({data})=>(data ? '10%' : '-70%')};
    transition: all 1.5s ease-in-out;
    @media (max-width: 650px){
      transition: all 2s ease-in-out;
      width: 90%;
      left: ${({data})=>(data ? '10%' : '-100%')};
    }
  `
const DownloadSection = () => {

  const [formChange,setFormChange] = useState(false);
  const [buttonValue,setButtonValue] = useState('Next');
  const [ErrorMsg,setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone:'',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => {
    // Regular expression pattern for validating email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return emailPattern.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression pattern for validating phone numbers
    const phonePattern = /^\+?[1-9]\d{1,14}$/;
  
    return phonePattern.test(phoneNumber);
  };

  const handleDownload = () => {
    fetch('demo.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'SamplePDF.pdf';
        alink.click();
      })
    })
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(formData.name === '' || formData.phone === '') {
      setErrorMsg('All the fields are required');
    }
    else if(formData.name.length <= 2){
      setErrorMsg("Name Should be atleast 2 characters")
    }
    else if(isValidPhoneNumber(formData.phone) === false){
      setErrorMsg("Phone Number is not valid")
    }
    else if(formData.email === ''){
      setFormChange(true);
      setButtonValue('Send')
      setErrorMsg('');
    }
    else if(isValidEmail(formData.email) === false){
      setErrorMsg("Enter a valid email address")
    }
    else{
      console.log(formData)
      handleDownload()
      setFormData({
            name: '',
            phone:'',
            email: '',  
          });
          setFormChange(false);
          setErrorMsg("")

        }
  };

  return (
    <div className={styles.sectionWrap}>
      <form className={styles.formWrap} action="">
        <Image className={styles.logo} src={hashLogo} alt='logo' />
        <div className={styles.center}>
          <h2>Download our <span className={styles.ForLargeScreen}>e-Brochure.</span><span className={styles.ForMobile}>website starter guide.</span></h2>
          <div className={styles.absoluteWrapper}>
          <InputWrapper1 className={styles.inputWrapper} data={formChange}>
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
          </InputWrapper1>
          <InputWrapper2 data={formChange}>
             <div className={styles.inputWrap}>
              <label className={styles.lable} htmlFor="name">Email</label>
              <input className={styles.input} type="email" name="email" id="email" placeholder='Enter your Email' value={formData.email}
              onChange={handleInputChange}/>
            </div>
          </InputWrapper2>
          </div>
          <div className={styles.ErrorMsg}>{ErrorMsg}</div>
          </div>
        <div className={styles.buttonWrap} onClick={handleSubmit}>
          <div className={styles.btn}>
            <FiArrowUpRight className={styles.arrowIcon} />
          </div>
          <div className={styles.btn1}>
            <button>{buttonValue}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DownloadSection