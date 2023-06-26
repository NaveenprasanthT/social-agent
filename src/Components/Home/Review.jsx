import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home/Review.module.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
import ratingImg from '../../../public/assets/rating.png'

const Review = () => {
    const data = [
        {
            name: 'Niharika Chowdry',
            review: "Social Agent is amazing! Their team is exceptional at promoting your company on social media and helped us achieve outstanding results. Our following and engagement have significantly increased, and I'm very impressed with their work and level of service. I highly recommend them!",
            designation: 'Architect, Construction Company.',
            rating: <div className={styles.ratingWrap}>
                {/* <Image src='' alt='rating hash' className={styles.hashicon} /> */}
            </div>,
        },
        {
            name: 'Keerthan Kushal',
            review: 'I am grateful to the team Social Agent for creating our website and managing our social media. I am happy with the work they did, and I appreciate their dedication to making our vision a reality',
            designation: 'Architect, Construction Company.'
        },
        {
            name: ' Joel D’souza',
            review: 'I am extremely happy with the work done by Social Agent in developing our website and managing our social media. From the very beginning, they were attentive to our needs and took the time to understand our brand and goals. Throughout the process, the team was always available to answer our questions and make changes as needed.',
            designation: 'Architect, Construction Company.'
        },
        {
            name: 'Deepika Shetty',
            review: "I was thoroughly impressed with the website and social media development services provided by Social Agent. The team didn't just make a pretty website that matched our brand, they also made sure it was functional and user-friendly.Thankyou!",
            designation: 'Architect, Construction Company.'
        },
        {
            name: 'Ayush Sharma',
            review: "Thank you, Social Agent! I'm impressed with their work and the service they offer. Their team is truly exceptional at promoting your company on social media. They've helped us achieve remarkable results, gaining more followers and engagement.",
            designation: 'Architect, Construction Company.'
        },

    ]

    // Scroll control

    let scrl = useRef(null);

    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
    };
    useEffect(() => {
        scrl.current.scrollLeft += +350; 
    }, [])


    return (
        <div className={styles.sectionWrap}>
            <div className={styles.reviewCardSection}>
                <h1>Hear From Our<span style={{ color: 'var(--P500)' }}> Happy Clients</span></h1>
                <div className={styles.scrollBtn}>
                    <BsArrowLeft className={styles.arrow} onClick={() => slide(-700)} />
                    <BsArrowRight className={styles.arrow} onClick={() => slide(+700)} />
                </div>
                <div className={styles.reviewCards} ref={scrl} >
                    {
                        data.map((item, key) => (
                            <div className={styles.reviewCard} key={key}>
                            <div>
                                <div className={styles.ratingWrap}>
                                    <Image className={styles.ratingImg} src={ratingImg} alt='hash1' />
                                    <Image className={styles.ratingImg} src={ratingImg} alt='hash2' />
                                    <Image className={styles.ratingImg} src={ratingImg} alt='hash3' />
                                    <Image className={styles.ratingImg} src={ratingImg} alt='hash4' />
                                    <Image className={styles.ratingImg} src={ratingImg} alt='hash5' />
                                </div>
                                <div className={styles.reviewContent}>
                                    <div className={styles.review}>
                                        {item.review}
                                    </div>
                                </div>
                            </div>
                                <div className={styles.reviewer}>
                                    <h3>{item.name}</h3>
                                    {/*<p>{item.designation}</p>*/}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Review