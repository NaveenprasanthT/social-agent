import React from 'react'
import Image from 'next/image'
import styles from '@/styles/DownloadSection.module.css'
import { FiArrowUpRight } from 'react-icons/fi'
import hashLogo from '../../public/assets/hashLogo.png'

const DownloadSection = () => {
  return (
    <div className={styles.sectionWrap}>
      <form className={styles.formWrap} action="">
        <Image className={styles.logo} src={hashLogo} alt='logo' />
        <div className={styles.center}>
          <h2>Download our website starter guide.</h2>
          <div className={styles.inputWrapper}>
            <div className={styles.inputWrap}>
              <label className={styles.lable} htmlFor="name">Your name</label>
              <input className={styles.input} type="text" name="name" id="name" placeholder='Enter your name' />
            </div>
            <div className={styles.inputWrap}>
              <label className={styles.lable} htmlFor="name">Your Email address</label>
              <input className={styles.input} type="text" name="name" id="name" placeholder='Enter your email id' />
            </div>
          </div>
        </div>
        <div className={styles.buttonWrap}>
          <div className={styles.btn}>
            <FiArrowUpRight className={styles.arrowIcon} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default DownloadSection