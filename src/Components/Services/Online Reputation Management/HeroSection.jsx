import React from 'react'
import styles from '@/styles/ORMPage/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
        <div>
            <h1>Online Reputation Management</h1>
            <p>Protect, enhance, and shine in the digital landscape. Our expert online reputation management services safeguard your brand's image, build trust, and drive success. Be the benchmark of excellence online.</p>
            <Button value='GET SOCIAL' color='var(--P700)' bg='#fff' padding='12px 45px'/>
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