import React, { useContext, useEffect, useState } from 'react'
import styles from '@/styles/Home/HeroSection.module.css'
import img from '../../../public/assets/heroImage.png'
import Image from 'next/image'
import icon from '../../../public/assets/scrolldown.png'
import Button from '../Button'
import TextTransition, { presets } from 'react-text-transition';
import { HoverContext } from '../../../Context'

const HeroSection = () => {
    const { setHoverActive } = useContext(HoverContext);
    const imageStyle = {
        borderRadius: '50%',
    };

    const TEXTS = ['mplementing', 'deating', 'nnovation'];

    // Text Animation
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className={styles.sectionWrap}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.ContainerPhne}>
                        <Image className={styles.imgPhne} src={img} alt='image' />
                    </div>
                    <h1>A marketing agency</h1>
                    <h1>that aims in <span style={{ display: 'flex', color: 'var(--P300)', marginLeft: '10px' }}> i <TextTransition springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition></span></h1>
                    <h1>digital marketing strategies.</h1>
                    <p>Our aim is to be the trusted partner of choice for businesses and brands looking to stay ahead of the curve in the digital world.</p>
                    <div
                        onMouseEnter={() => setHoverActive(true)}
                        onMouseLeave={() => setHoverActive(false)} 
                        className={styles.ButtonContainer}>
                        <Button   value={<>Book <span style={{ color: 'var(--P500)' }}>Free</span> Consultation</>} color='var(--P700)' bg='#fff' />
                    </div>
                </div>
                <div className={styles.right}>
                    <Image className={styles.img} src={img} alt='image' />
                </div>
            </div>
            <Image className={styles.icon} loading='lazy' style={imageStyle} src={icon} alt='image' />
        </div>
    )
}

export default HeroSection;