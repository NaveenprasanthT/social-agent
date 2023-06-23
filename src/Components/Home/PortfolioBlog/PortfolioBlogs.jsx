import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home/PortfolioBlogs.module.css'
import Button from '../../Button'
import Carousel from './Carousel'
import Carousell from './Carousell'
import Link from 'next/link'

const PortfolioBlogs = () => {
    const [mobileView, setMobileView] = useState(false)

    useEffect(() => {
      const handleResize = () => {
        if(window.innerWidth<=500){
          setMobileView(true)
        }else{
          setMobileView(false)
        }
      };
  
      // Initial screen size
      handleResize();
  
      // Add event listener for resize
      window.addEventListener('resize', handleResize);
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    return (
        <div className={styles.sectionWrap}>
                <video src={require('../../../../public/vdo/Logo_Animation_1.mp4')} 
                    type="mp4" 
                    loop 
                    autoPlay
                    muted
                    playsInline    
                    className={styles.hashSection}
                />
            <div className={styles.RightContent} >
                <div className={styles.blogWrap}>
                    <h2><span>Our</span> Projects</h2>
                    <Carousel mobile={true}/>
                    <Link href='/Portfolio'>
                        <Button color='#fff' bg='var(--P700)' value='View all'/>
                    </Link>
                </div>
                <div className={styles.blogWrap}>
                    <h2><span>Our</span> Blog</h2>
                    <Carousell mobile={mobileView}/>
                    <Link href='/blog'>
                        <Button color='#fff' bg='var(--P700)' value='View all' align='center'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PortfolioBlogs;