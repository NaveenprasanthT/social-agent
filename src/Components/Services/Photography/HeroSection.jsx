import React from 'react'
import styles from '@/styles/Photography/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Photography & Videography</h1>
            <p>Retrieve  your message with compelling visuals and stunning videos allowing your brand's story to unfold with the power of video & enhance your visual presence with our artistic and innovative photography and videography services. 
            </p>
            <Link href='/Start-A-Project' style={{ textDecoration: 'none', width: '100%',display:'flex',justifyContent:'center' }}>
            <div className={styles.ButtonContainer}>
                <div className={styles.absoluteContainer}></div>
                <Button
                    color='var(--P700)'
                    bg='#fff'
                    value="GET SOCIAL"
                    fontSize="14px"
                    padding='15px 65px'
                    fontWeight='700'
                />
            </div>
        </Link>
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