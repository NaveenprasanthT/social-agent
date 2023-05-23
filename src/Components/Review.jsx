import React from 'react'
import styles from '@/styles/Review.module.css'
import { BsArrowDownCircle } from 'react-icons/bs'
import Image from 'next/image'
import quoteImg from '../../public/assets/quote.png'
import { IoMdQuote } from 'react-icons/io'

const Review = () => {
    const data = [
        {
            name: 'Name 01',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi.',
            designation: 'Architect, Construction Company.'
        },
        {
            name: 'Name 01',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi.',
            designation: 'Architect, Construction Company.'
        },
        {
            name: 'Name 01',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Ut et massa mi.',
            designation: 'Architect, Construction Company.'
        },

    ]
    return (
        <div className={styles.sectionWrap}>
            <div className={styles.head}>
                <div className={styles.leftContent}>
                    We believe that impactful marketing is created by understanding the business goals, the environment & the audience.
                </div>
                <div className={styles.knowMore}>
                    <p>Learn more</p>
                    {/* <p>erom nreaL</p> */}
                    <BsArrowDownCircle className={styles.arrowIcon} />
                </div>
            </div>

            <div className={styles.reviewCardSection}>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <div className={styles.reviewCards}>
                    {
                        data.map((item, key) => (
                            <div className={styles.reviewCard}key={key}>
                                <div className={styles.ratingSection}>
                                    <div className={styles.left}>
                                        <p>Rating</p>
                                    </div>
                                    <div className={styles.right}>
                                        <IoMdQuote className={styles.quote} />
                                    </div>
                                </div>
                                <div className={styles.reviewContent}>
                                    <p>Review</p>
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
            </div>
        </div>
    )
}

export default Review