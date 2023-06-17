import React from 'react'
import styles from '@/styles/ServicesPage/Services.module.css'
import Image from 'next/image'
import bannerHash from '../../../public/assets/serviceBg.png'
import Button from '../Button'
import { CgCodeSlash } from 'react-icons/cg'
import Link from 'next/link'


const MainServicePage = () => {

    const data = [
        {
            id: '01',
            title: 'Social Media Marketing',
            desc: 'From content creation to campaign management, we handle every aspect of your SMM with expertise.',
            url: '/Services/SocialMediaMarketing',
        },
        {
            id: '02',
            title: 'Search Engine Optimization & Marketing  ',
            desc: 'rom keyword research to ranking, entrust your SEO & SEM marketing journey to our specialists.',
            url: '/',
        },
        {
            id: '03',
            title: 'Influencer Marketing',
            desc: 'From identifying influencers to crafting collaborations, we handle everything.',
            url: '/',
        },
        {
            id: '04',
            title: 'Website Development',
            desc: 'Lorem ipsum dolor sit amet consectetur. Amet lectus blandit tempus ac aliquam.',
            url: '/',
        },
        {
            id: '05',
            title: 'Photography/ Videography',
            desc: ' From consistent visuals to aesthetic product highlights , we capture the essence of your Brand.',
            url: '/',
        },
        {
            id: '06',
            title: 'Online reputation Management',
            desc: 'From reputation monitoring to proactive management, we expertly handle every aspect of your digital brand presence',
            url: '/',
        },
        {
            id: '07',
            title: 'Digital Strategy & Consulting',
            desc: 'Lorem ipsum dolor sit amet consectetur. Varius egestas phasellus fusce tempus ut.',
            url: '/',
        },
        {
            id: '08',
            title: 'Brand & Print Solutions',
            desc: "From Ideation to Execution,We Craft Your Brand's Story with Artistry and Precision.",
            url: '/',
        },
        {
            id: '09',
            title: 'Email marketing',
            desc: 'From creating engaging email content to drive click-through rates, we ensure an effective email marketing campaign.',
            url: '/',
        },
        {
            id: '10',
            title: 'SMS marketing',
            desc: 'From writing tailored messages to reaching out to individual recipients, we manage SMS marketing.',
            url: '/',
        },
        {
            id: '11',
            title: 'Video marketing',
            desc: 'From writing tailored messages to reaching out to individual recipients, we manage SMS marketing.',
            url: '/',
        },
        {
            id: '12',
            title: 'Content & Creatives',
            desc: 'From writing tailored messages to reaching out to individual recipients, we manage SMS marketing.',
            url: '/',
        },
        {
            id: '13',
            title: 'Analytics & Reports',
            desc: 'From writing tailored messages to reaching out to individual recipients, we manage SMS marketing.',
            url: '/',
        },
        {
            id: '14',
            title: 'Performance Marketing',
            desc: 'From writing tailored messages to reaching out to individual recipients, we manage SMS marketing.',
            url: '/',
        },
    ]
    return (
        <>
            <div className={styles.heroSection}>
                <h1>Our Services</h1>
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
                <Image className={styles.bannerHash} src={bannerHash} alt='hash image' />
            </div>
            <div className={styles.cards}>
                {
                    data.map((item, key) => (
                        <div key={key} className={styles.card}>
                            <div>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.desc}>{item.desc}</div>
                            </div>
                            <div className={styles.bottomWrap}>
                                <Link href={item.url}>
                                    <Button 
                                        value='Know more' 
                                        bg='var(--P700)' 
                                        color='#fff' 
                                        padding='7px 20px'
                                        fontSize='10px'
                                    />
                                </Link>
                                <Image 
                                    src={bannerHash} 
                                    alt="Loadig"
                                    className={styles.cardImage}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MainServicePage;