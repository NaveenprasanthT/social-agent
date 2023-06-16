import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home/Review.module.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
import ratingImg from '../../../public/assets/rating.png'

const Review = () => {
    const data = [
        {
            name: 'Name 01',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi.',
            designation: 'Architect, Construction Company.',
            rating: <div className={styles.ratingWrap}>
                {/* <Image src='' alt='rating hash' className={styles.hashicon} /> */}
            </div>,
        },
        {
            name: 'Name 02',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi.',
            designation: 'Architect, Construction Company.'
        },
        {
            name: 'Name 03',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi.',
            designation: 'Architect, Construction Company.'
        },
        {
            name: 'Name 04',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi.',
            designation: 'Architect, Construction Company.'
        },
        {
            name: 'Name 05',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi.',
            designation: 'Architect, Construction Company.'
        },

    ]

    // Scroll control

    let scrl = useRef(null);

    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
    };
    useEffect(() => {
        scrl.current.scrollLeft += +300;
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
                                <div className={styles.reviewer}>
                                    <h3>{item.name}</h3>
                                    <p>{item.designation}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <h1>Review Test</h1>
            </div>
        </div>
    )
}

export default Review