import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import styles from "@/styles/ServicesPage/Services.module.css";
import Link from 'next/link';

const ServiceBanner =  () => {
    return (
    <div className={styles.heroSection}>
        <h1>Our Services</h1>
        <Image src='/assets/serviceBg.png' alt='hash image' width={1000} height={1000} className={styles.bannerHashPhone}/>
        <p>Comprehensive digital marketing solutions to boost your brand's online presence and drive results. Achieve your goals with our dedicated assistance!</p>
        <Link href='/Start-A-Project' style={{ textDecoration: 'none', width: '100%' }}>
                    <div className={styles.ButtonContainer}>
                        <div className={styles.absoluteContainer}></div>
                        <Button
                            color='var(--P700)'
                            bg='#fff'
                            value="GET STARTED"
                            fontSize="14px"
                            padding='12px 65px'
                            fontWeight='700'
                        />
                    </div>
                </Link>    
        <Image src='/assets/serviceBg.png' alt='hash image' width={1000} height={1000} className={styles.bannerHash}/>
    </div>
    );
}

export default ServiceBanner;