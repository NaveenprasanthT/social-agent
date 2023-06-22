import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import styles from "@/styles/ServicesPage/Services.module.css";

const ServiceBanner =  () => {
    return (
    <div className={styles.heroSection}>
        <h1>Our Services</h1>
        <Image src='/assets/serviceBg.png' alt='hash image' width={1000} height={1000} className={styles.bannerHashPhone}/>
        <p>Lorem ipsum dolor sit amet consectetur.
            Consectetur feugiat bibendum mattis sed vel maecenas gravida faucibus.</p>
            <Button 
            color='var(--P700)' 
            bg='#fff' 
            value="GET STARTED" 
            fontSize="13px"
            borderRadius='50px'
            padding='14px 50px'
            fontWeight='600'
        />
        <Image src='/assets/serviceBg.png' alt='hash image' width={1000} height={1000} className={styles.bannerHash}/>
    </div>
    );
}

export default ServiceBanner;