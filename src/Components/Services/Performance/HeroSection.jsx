import React from 'react'
import styles from '@/styles/Performance/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <div className={styles.sectionContent}>
                <h1>Performance Marketing</h1>
                <Image
                    src='/assets/Performance/PerformanceHeader.png'
                    width={1000}
                    height={1000}
                    className={styles.ORMImagePhne}
                />
                <p>Drive explosive business growth with data-driven strategies. Optimize conversions, magnetize targeted traffic, and maximize ROI. Our performance-based online marketing ensures you pay only for desired user actions.</p>
                <Link href='/Start-A-Project' style={{ textDecoration: 'none', width: '100%' }}>
                    <div className={styles.ButtonContainer}>
                        <div className={styles.absoluteContainer}></div>
                        <Button
                            color='var(--P700)'
                            bg='#fff'
                            value="GET EFFECTIVE"
                            fontSize="14px"
                            padding='12px 65px'
                            fontWeight='700'
                        />
                    </div>
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