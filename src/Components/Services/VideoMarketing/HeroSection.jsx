import React from 'react'
import styles from '@/styles/VideoMarketing/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
        <div>
            <h1>Video Marketing</h1>
            <Image 
                src='/assets/VideoMarketing/VideoMarketingHeader.png' 
                width={1000} 
                height={1000}
                className={styles.ORMImagePhne}    
            />
            <p>Accelerate your brand's success with video marketing. Captivate audiences, drive engagement, and conversions. Let your brand story shine through dynamic visuals. </p>
        <Link href='/Start-A-Project'>
        <Button value='GET PROTECTED' color='var(--P700)' bg='#fff' padding='12px 45px'/>
        </Link>    
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