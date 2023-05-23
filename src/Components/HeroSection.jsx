import React from 'react'
import styles from '@/styles/HeroSection.module.css'
import img from '../../public/assets/heroImage.png'
import Image from 'next/image'
import icon from '../../public/assets/scrolldown.png'
import bgimg from '../../public/assets/heroBg.png'

const HeroSection = () => {

    const imageStyle = {
        borderRadius: '50%',
      };


    return (
        <div className={styles.sectionWrap}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <h1>A Bricstal Group initiative marketing agency</h1>
                    <h1>that aims</h1>
                    <h1>digital marketing strategies.</h1>
                    <p>Our aim is to be the trusted partner of choice for businesses and brands looking to stay ahead of the curve in the digital world.</p>
                </div>
                <div className={styles.right}>
                    <Image className={styles.img} src={img} alt='image' />
                </div>
            </div>
            <Image className={styles.icon} loading = 'lazy' style={imageStyle} src={icon} alt='image' />
        </div>
    )
}

export default HeroSection