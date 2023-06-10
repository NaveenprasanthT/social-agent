import React from 'react'
import styles from '@/styles/Home/PortfolioBlogs.module.css'
import Image from 'next/image'
import Button from '../Button'

const PortfolioBlogs = () => {
    return (
        <div className={styles.sectionWrap}>
            <div className={styles.hashSection}>
                <Image src='' alt='hash' />
            </div>
            <div className={styles.RightContent}>
                <div className={styles.portfolioWrap}>
                    <h2>Portfolio</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Amet sed elementum facilisis lorem sodales sem. Quam pulvinar habitant morbi tincidunt viverra dictum.
                        Blandit faucibus aliquam tellus pellentesque sit gravida.</p>
                    <Button color='#fff' bg='var(--P700)' value='Know more' />
                </div>
                <div className={styles.blogWrap}>
                    <h2>Blog</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Amet sed elementum facilisis lorem sodales sem. Quam pulvinar habitant morbi tincidunt viverra dictum.
                        Blandit faucibus aliquam tellus pellentesque sit gravida.</p>
                    <Button color='#fff' bg='var(--P700)' value='Know more' />
                </div>
            </div>
        </div>
    )
}

export default PortfolioBlogs