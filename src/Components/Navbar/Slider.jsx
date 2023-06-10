import React, { useContext } from 'react'
import styles from '@/styles/Slider.module.css'
import logo from '../../../public/assets/logo.png'
import { SliderWrap } from './SliderElement'
import Button from '../Button'
import { IoCloseSharp } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
import { SliderContext } from '../../../Context'

const Slider = () => {
    const { sliderActive, setSliderActive } = useContext(SliderContext)
    return (
        <SliderWrap sliderActive={sliderActive} >
            <div className={styles.navbarWrap}>
                <div className={styles.navbar}>
                    <Image className={styles.logo} src={logo} alt='logo' />
                    <div className={styles.navContentWrap}>
                        <Button value='Start a project' color='#000' bg='#fff' />
                        <Button value='Login' color='#000' bg='#fff' />
                        <div onClick={() => setSliderActive(false)}>
                            <Button value={<IoCloseSharp style={{ fontSize: '20px', display: 'flex' }} />} color='#000' bg='#fff' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.menuWrap}>
                <div className={styles.navLinks}>
                    <Link href='/' className={styles.navLink}>Home</Link>
                    <Link href='/Services' onClick={() => setSliderActive(false)} className={styles.navLink}>Services</Link>
                    <Link href='/' className={styles.navLink}>Portfolio</Link>
                    <Link href='/AboutUs' onClick={() => setSliderActive(false)} className={styles.navLink}>About Us</Link>
                    <Link href='/' className={styles.navLink}>Contact us</Link>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.services}>
                        <h4>Top Services</h4>
                        <Link href='/' className={styles.ServiceLink}>Search Engine Optimization</Link>
                        <Link href='/' className={styles.ServiceLink}>Social Media Marketing</Link>
                        <Link href='/' className={styles.ServiceLink}>UI/UX Designing</Link>
                        <Link href='/' className={styles.ServiceLink}>Website Development</Link>
                        <Link href='/' className={styles.ServiceLink}>Case Studies</Link>
                    </div>
                    <div className={styles.blogs}>
                        <h4>New Blogs</h4>
                        <Link href='/' className={styles.blogLink}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link>
                        <Link href='/' className={styles.blogLink}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link>
                        <Link href='/' className={styles.blogLink}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link>
                    </div>
                </div>
            </div>
        </SliderWrap>
    )
}

export default Slider