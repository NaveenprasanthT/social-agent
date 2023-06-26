import React from 'react'
import styles from '@/styles/AboutUs/AboutUs.module.css'
import Image from 'next/image'
import teamPic from '../../../public/assets/teamPic.webp'

const HeroSection = () => {
  return (
    <>
      <div className={styles.HeroSectionWrap}>
        <div className={styles.HeadingContainer}>
          <h1>"Driving <span className={styles.highlight}>digital success</span> through innovative marketing solutions."</h1>
          <video src={require('../../../public/vdo/BgVDO.mp4')} 
                    type="mp4" 
                    loop 
                    autoPlay
                    muted
                    playsInline    
                    className={styles.BackgroundSection}
                />
        </div>
      </div>
      <div className={styles.teamWrap}>
      <div className={styles.knowUs}>KNOW US</div>
      <div className={styles.PicAndContent}>
        <Image className={styles.img} src={teamPic} alt='team' />
        <p>
        Social Agent is a marketing agency that aims at Ideating, Innovating, Implementing digital marketing strategies.
        <br/>
        At Social Agent, we believe that impactful marketing is created by understanding the business goals, the environment, and the audience. We aim to be the trusted partner of choice for businesses and brands looking to stay ahead of the curve in the digital world.        
        </p>
        </div>
      </div>
    </>
  )
}

export default HeroSection