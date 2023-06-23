import React from 'react'
import styles from '@/styles/Brand/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
        <div className={styles.sectionContent}>
        <h1>Brand print and solutions</h1>
        <div className={styles.sectionImages}>
                <Image 
                src='/assets/Brand/BrandImage.png' 
                width={500} 
                height={500}
                className={styles.BrandImg1Phne}    
                />
                <Image 
                    src='/assets/Brand/BrandImage2.png' 
                    width={500} 
                    height={500}
                    className={styles.BrandImg2Phne}    
                />
                <Image 
                src='/assets/Brand/BrandImage3.png' 
                width={500} 
                height={500}
                className={styles.BrandImg3Phne}    
                />
                <Image 
                src='/assets/Brand/BrandImage4.png' 
                width={500} 
                height={500}
                className={styles.BrandImg4Phne}    
                />
                <Image 
                src='/assets/Brand/BrandImage5.png' 
                width={500} 
                height={500}
                className={styles.BrandImg5Phne}    
                />
                <Image 
                src='/assets/Brand/BrandImage6.png' 
                width={500} 
                height={500}
                className={styles.BrandImg6Phne}    
                />
        </div>
        <p>Improving the client experience, we redefine marketing and printing solutions for your thriving business, from conception to implementation. Our innovative print solutions ensure extensive reach for your target audience.</p>
        <Link href='/Start-A-Project'>
        <Button value='GET ARTISTIC' color='var(--P700)' bg='#fff' padding='12px 35px'/>
        </Link>
        </div>
           <Image 
                src='/assets/Brand/BrandImage.png' 
                width={500} 
                height={500}
                className={styles.BrandImg1}    
            />
            <Image 
                src='/assets/Brand/BrandImage2.png' 
                width={500} 
                height={500}
                className={styles.BrandImg2}    
            />
            <Image 
            src='/assets/Brand/BrandImage3.png' 
            width={500} 
            height={500}
            className={styles.BrandImg3}    
            />
            <Image 
            src='/assets/Brand/BrandImage4.png' 
            width={500} 
            height={500}
            className={styles.BrandImg4}    
            />
            <Image 
            src='/assets/Brand/BrandImage5.png' 
            width={500} 
            height={500}
            className={styles.BrandImg5}    
            />
            <Image 
            src='/assets/Brand/BrandImage6.png' 
            width={500} 
            height={500}
            className={styles.BrandImg6}    
            />
        </div>
    )
}

export default HeroSection