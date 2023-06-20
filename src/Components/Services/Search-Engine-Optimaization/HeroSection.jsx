import React from 'react'
import styles from '@/styles/SEOPage/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Search Engine Optimization <br/> & Marketing</h1>
            <p>Creating and Publishing content, such as text, images and videos that is designed to engage the target audience and encourage them to take a specific action like making a purchase or visiting a website.</p>
            <Button value='GET SOCIAL' color='var(--P700)' bg='#fff' padding='12px 50px'/>
            <Image className={styles.SEOHeaderImg1} src='/assets/SEO/SEOHeader1.png' width={210} height={130}/>
            <Image className={styles.SEOHeaderImg2} src='/assets/SEO/SEOHeader2.png' width={150} height={100}/>
            <Image className={styles.SEOHeaderImg3} src='/assets/SEO/SEOHeader3.png' width={100} height={100}/>
            <Image className={styles.SEOHeaderImg4} src='/assets/SEO/SEOHeader4.png' width={200} height={130}/>
            <Image className={styles.SEOHeaderImg5} src='/assets/SEO/SEOHeader5.png' width={220} height={100}/>
        </div>
    )
}

export default HeroSection