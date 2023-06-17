import React from 'react'
import styles from '@/styles/SMMPage/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Social Media Marketing</h1>
            <p>Craft and share captivating content - from text, and images to videos - strategically designed to engage your audience, drive action, and boost conversions. Experience the art of persuasive social media marketing that delivers tangible results.</p>
            <Button value='GET SOCIAL' color='var(--P700)' bg='#fff' padding='12px 35px'/>
            <Image 
                src='/assets/SMM/SMMBG1.png' 
                width={100} 
                height={100}
                className={styles.MessageIcon}    
            />
            <Image 
                src='/assets/SMM/SMMBG1.png' 
                width={100} 
                height={100}
                className={styles.MessageIcon}    
            />
        </div>
    )
}

export default HeroSection