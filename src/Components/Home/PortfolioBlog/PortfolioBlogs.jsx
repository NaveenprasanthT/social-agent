import React, { useRef } from 'react'
import styles from '@/styles/Home/PortfolioBlogs.module.css'
import Image from 'next/image'
import Button from '../../Button'
import Blog from './Blog.jsx'
import Portfolio from './Portfolio.jsx'

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
                        <Portfolio/>
                    <Button color='#fff' bg='var(--P700)' value='Know more' />
                </div>
                <div className={styles.blogWrap}>
                    <h2>Our Blog</h2>
                        <Blog/>
                    <Button color='#fff' bg='var(--P700)' value='Know more' />
                </div>
            </div>
        </div>
    )
}

export default PortfolioBlogs;