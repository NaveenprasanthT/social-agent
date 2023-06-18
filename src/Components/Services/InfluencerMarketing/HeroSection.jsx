import React from 'react'
import styles from '@/styles/InfluencerMarketing/InfluencerMarketing.module.css'
import Button from '@/Components/Button'

const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Social Media Marketing</h1>
            <p>Craft and share captivating content - from text, and images to videos - strategically designed to engage your audience, drive action, and boost conversions. Experience the art of persuasive social media marketing that delivers tangible results.</p>
            <Button value='GET SOCIAL' color='var(--P700)' bg='#fff' />
        </div>
    )
}

export default HeroSection