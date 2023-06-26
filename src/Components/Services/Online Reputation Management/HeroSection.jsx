import React from 'react'
import styles from '@/styles/ORMPage/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
        <div className={styles.sectionContent}>
            <h1>Online Reputation Management</h1>
            <Image 
                src='/assets/ORM/ORMHeader.png' 
                width={1000} 
                height={1000}
                className={styles.ORMImagePhne}    
            />
            <p>Protect, enhance, and shine in the digital landscape. Our expert online reputation management services safeguard your brand's image, build trust, and drive success. Be the benchmark of excellence online.</p>
            <Link href='/Start-A-Project' style={{ textDecoration: 'none',width:'100%' }}>
            <div className={styles.ButtonContainer}>
                <div className={styles.absoluteContainer}></div>
                <Button
                    color='var(--P700)'
                    bg='#fff'
                    value="GET SOCIAL"
                    fontSize="14px"
                    padding='12px 85px'
                    fontWeight='700'
                />
            </div>
        </Link>
        </div>
        <Image 
                src='/assets/ORM/ORMHeader.png' 
                width={1000} 
                height={1000}
                className={styles.ORMImage}    
            />
        </div>
    )
}

export default HeroSection