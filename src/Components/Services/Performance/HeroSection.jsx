import React from 'react'
import styles from '@/styles/Performance/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
        <div>
            <h1>Performance Marketing</h1>
            <Image 
                src='/assets/Performance/PerformanceHeader.png' 
                width={1000} 
                height={1000}
                className={styles.ORMImagePhne}    
            />
            <p>Drive explosive business growth with data-driven strategies. Optimize conversions, magnetize targeted traffic, and maximize ROI. Our performance-based online marketing ensures you pay only for desired user actions.</p>
        <Link href='/Start-A-Project'>
        <Button value='GET EFFECTIVE' color='var(--P700)' bg='#fff' padding='12px 45px'/>
        </Link>
        </div>
        <Image 
                src='/assets/Performance/PerformanceHeader.png' 
                width={1000} 
                height={1000}
                className={styles.ORMImage}    
            />
        </div>
    )
}

export default HeroSection