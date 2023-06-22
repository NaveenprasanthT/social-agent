import React from 'react'
import styles from '@/styles/Photography/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Photography & Videography</h1>
            <p>Creating and Publishing content, such as text, images and videos that is designed to engage the target audience and encourage them to take a specific action like making a purchase or visiting a website.</p>
            <Button value='GET SOCIAL' color='var(--P700)' bg='#fff' padding='12px 35px'/>
            <Image 
                src='/assets/Photography/Group1.png' 
                width={150} 
                height={100}
                className={styles.MessageIcon}    
            />
            <Image 
                src='/assets/Photography/Group2.png' 
                width={150} 
                height={100}
                className={styles.HeartbeatIcon}     
            />
            <Image 
                src='/assets/Photography/Group3.png' 
                width={150} 
                height={100}
                className={styles.TwitterIcon}     
            />
            <Image 
                src='/assets/Photography/Group4.png' 
                width={150} 
                height={100}
                className={styles.YoutubeIcon}     
            />
            <Image 
                src='/assets/Photography/Group5.png' 
                width={150} 
                height={100}
                className={styles.LinkedInIcon}     
            />
            <Image 
                src='/assets/Photography/Group6.png' 
                width={100} 
                height={100}
                className={styles.InstagramIcon}     
            />
        </div>
    )
}

export default HeroSection