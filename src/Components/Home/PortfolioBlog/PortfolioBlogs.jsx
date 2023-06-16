import React, { useRef } from 'react'
import styles from '@/styles/Home/PortfolioBlogs.module.css'
import Image from 'next/image'
import Button from '../../Button'
import Carousel from './Carousel'
import Carousell from './Carousell'
import Link from 'next/link'

const PortfolioBlogs = () => {

    const rightDivRef = useRef(null);

    const handleLeftDivScroll = (e) => {
      const scrollPosition = e.target.scrollTop;
      rightDivRef.current.scrollTop = scrollPosition;
    };

    return (
        <div className={styles.sectionWrap}>
                <video src={require('../../../../public/vdo/Logo_Animation_1.mp4')} 
                    type="mp4" 
                    loop 
                    controls    
                    className={styles.hashSection}
                    onScroll={handleLeftDivScroll}
                />
            <div className={styles.RightContent} ref={rightDivRef}>
                <div className={styles.blogWrap}>
                    <h2>Our Projects</h2>
                    <Carousel/>
                    <Link href='/Portfolio'>
                        <Button color='#fff' bg='var(--P700)' value='Know more' />
                    </Link>
                </div>
                <div className={styles.blogWrap}>
                    <h2>Our Blog</h2>
                    <Carousell/>
                    <Link href='/blog'>
                        <Button color='#fff' bg='var(--P700)' value='Know more' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PortfolioBlogs;