import React from 'react'
import styles from '@/styles/VideoMarketing/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
        <div>
            <h1>Video Marketing</h1>
            <p>Creating and Publishing content, such as text, images and videos that is designed to engage the target audience and encourage them to take a specific action like making a purchase or visiting a website.</p>
            <Button value='GET SOCIAL' color='var(--P700)' bg='#fff' padding='12px 45px'/>
        </div>
        <Image 
                src='/assets/VideoMarketing/VideoMarketingHeader.png' 
                width={1000} 
                height={1000}
                className={styles.ORMImage}    
            />
        </div>
    )
}

export default HeroSection