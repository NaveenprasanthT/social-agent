import React from 'react'
import styles from '@/styles/ContentAndCreative/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <div className={styles.sectionContent}>
                <h1>WhatsApp Marketing</h1>
                <Image
                    src='/assets/Whatsapp/WMHeader.png'
                    width={1000}
                    height={1000}
                    className={styles.ORMImagePhne}
                />
                <p>Embrace the potential of WhatsApp for your business! Seamlessly connect with customers, deliver personalized messages, and ignite conversions. Leverage the power of direct communication and fuel remarkable business growth.
                </p>
                <div className={styles.ButtonContainer}>
                    <div className={styles.absoluteContainer}></div>
                    <Button
                        color='var(--P700)'
                        bg='#fff'
                        value="GET PROTECTED"
                        fontSize="14px"
                        padding='12px 65px'
                        fontWeight='700'
                    />
                </div>
            </div>
            <Image
                src='/assets/Whatsapp/WMHeader.png'
                width={1000}
                height={1000}
                className={styles.ORMImage}
            />
        </div>
    )
}

export default HeroSection