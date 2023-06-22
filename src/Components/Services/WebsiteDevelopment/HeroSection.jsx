import React from 'react'
import styles from '@/styles/WebsiteDevelopment/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Website Development</h1>
            <p>Creating and Publishing content, such as text, images and videos that is designed to engage the target audience and encourage them to take a specific action like making a purchase or visiting a website.</p>
            <Button value='GET DISCOVERED' color='var(--P700)' bg='#fff' padding='12px 35px'/>
            <Image 
                src='/assets/Website/Frame.png' 
                width={500} 
                height={500}
                className={styles.MessageIcon}    
            />
            <Image 
                src='/assets/Website/Frame1.png' 
                width={500} 
                height={500}
                className={styles.HeartbeatIcon}     
            />
            <Image 
                src='/assets/Website/Frame2.png' 
                width={500} 
                height={500}
                className={styles.TwitterIcon}     
            />
            <Image 
                src='/assets/Website/Frame3.png' 
                width={500} 
                height={500}
                className={styles.YoutubeIcon}     
            />
            <Image 
                src='/assets/Website/Frame4.png' 
                width={500} 
                height={500}
                className={styles.LinkedInIcon}     
            />
            <Image 
                src='/assets/Website/Frame5.png' 
                width={500} 
                height={500}
                className={styles.InstagramIcon}     
            />
        </div>
    )
}

export default HeroSection