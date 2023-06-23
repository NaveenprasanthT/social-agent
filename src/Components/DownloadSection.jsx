import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/DownloadSection.module.css'
import { FiArrowUpRight } from 'react-icons/fi'
import hashLogo from '../../public/assets/hashLogo.webp'
import styled from 'styled-components'


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

  const [formData, setFormData] = useState({
    name: '',
    phone:'',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.name !== '' && formData.phone !== '' && formData.email === ''){
      setFormChange(true);
      setButtonValue('Send')
    }
    if(formData.name !== '' && formData.phone !== '' && formData.email !== ''){
      console.log(formData)   
      setFormData({
            name: '',
            phone:'',
            email: '',  
          });
          setFormChange(false);
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