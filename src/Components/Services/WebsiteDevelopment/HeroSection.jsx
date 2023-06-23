import React from 'react'
import styles from '@/styles/WebsiteDevelopment/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Website Development</h1>
            <p>Ignite the power of your online presence with our exceptional website development services. We craft captivating websites that engage, inspire, and drive results. Experience digital excellence with an immersive user journey.</p>
        <Link href='/Start-A-Project'>
        <Button value='GET DIGITAL' color='var(--P700)' bg='#fff' padding='12px 35px'/>
        </Link>
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