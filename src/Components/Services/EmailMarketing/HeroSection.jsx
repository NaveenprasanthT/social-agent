import React from 'react'
import styles from '@/styles/EmailMarketing/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
        <div>
            <h1>Email Marketing</h1>
            <Image 
                src='/assets/Email/EmailMarketHeader.png' 
                width={1000} 
                height={1000}
                className={styles.ORMImagePhne}    
            />
            <p>Speed up your business with targeted emails! Expand reach, nurture leads, and boost conversions. Maximize the potential of impactful campaigns to achieve extraordinary growth and success.</p>
        <Link href='/Start-A-Project'>
        <Button value='GET PROTECTED' color='var(--P700)' bg='#fff' padding='12px 45px'/>
        </Link>
        </div>
        <Image 
                src='/assets/Email/EmailMarketHeader.png' 
                width={1000} 
                height={1000}
                className={styles.ORMImage}    
            />
        </div>
    )
}

export default HeroSection