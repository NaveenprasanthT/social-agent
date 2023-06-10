import React from 'react'
import styles from '@/styles/InfluencerMarketing/InfluencerMarketing.module.css'
import Button from '@/Components/Button'

const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Social Media Marketing</h1>
            <p>creating and publishing content, such as text, images and videos that is designed to engage the target
                audience and encourage them to take a specific action like making a purchase or visiting a website.</p>
            <Button value='GET SOCIAL' color='var(--P700)' bg='#fff' />
        </div>
    )
}

export default HeroSection