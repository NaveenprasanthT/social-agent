import React from 'react'
import styles from '@/styles/SEOPage/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Search Engine Optimization <br /> & Marketing</h1>
            <div class={styles.ImageContainer}>
                <Image className={styles.SEOHeaderImg1Phne} src='/assets/SEO/SEOHeader1.png' width={500} height={500} />
                <Image className={styles.SEOHeaderImg2Phne} src='/assets/SEO/SEOHeader2.png' width={500} height={500} />
                <Image className={styles.SEOHeaderImg3Phne} src='/assets/SEO/SEOHeader4.png' width={500} height={500} />
                <Image className={styles.SEOHeaderImg4Phne} src='/assets/SEO/SEOHeader4.png' width={500} height={500} />
                <Image className={styles.SEOHeaderImg5Phne} src='/assets/SEO/SEOHeader5.png' width={550} height={500} />
            </div>
            <p>Enhance your online presence and drive targeted traffic with our SEO & SEM solutions. With our SEO & SEM services, command search engine rankings, maximize visibility, and skyrocket your business success.
            </p>
            <Link href='/Start-A-Project' style={{ textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className={styles.ButtonContainer}>
                    <div className={styles.absoluteContainer}></div>
                    <Button
                        color='var(--P700)'
                        bg='#fff'
                        value="GET SOCIAL"
                        fontSize="14px"
                        padding='15px 75px'
                        fontWeight='700'
                    />
                </div>
            </Link>
            <Image className={styles.SEOHeaderImg1} src='/assets/SEO/SEOHeader1.png' width={500} height={500} />
            <Image className={styles.SEOHeaderImg2} src='/assets/SEO/SEOHeader2.png' width={500} height={500} />
            <Image className={styles.SEOHeaderImg3} src='/assets/SEO/SEOHeader3.png' width={500} height={500} />
            <Image className={styles.SEOHeaderImg4} src='/assets/SEO/SEOHeader4.png' width={500} height={500} />
            <Image className={styles.SEOHeaderImg5} src='/assets/SEO/SEOHeader5.png' width={550} height={500} />
        </div>
    )
}

export default HeroSection