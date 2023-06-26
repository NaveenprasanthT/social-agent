import React, { useContext, useState } from 'react'
import styles from '@/styles/Slider.module.css'
import logo from '../../../public/assets/sliderLogo.png'
import { SliderWrap } from './SliderElement'
import Button from '../Button'
import { IoCloseSharp } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
import { SliderContext } from '../../../Context'
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const PhoneMenu1 = styled.div`
@media screen and (max-width:1000px){
    height: ${({ open }) => (open ? '17rem' : '2.5rem')};
    border-bottom: ${({ open }) => (open ? 'none' : '1px solid #ffffff')};
    overflow: hidden;
    transition: all 1s ease-in-out;
   }`

const PhoneMenu2 = styled.div`
@media screen and (max-width:1000px  ){
    height: ${({ open }) => (open ? '25rem' : '2.5rem')};
    border-bottom: ${({ open }) => (open ? 'none' : '1px solid #ffffff')};
    overflow: hidden;
    transition: all 1s ease-in-out;   
   }`

const Icon = styled.div`
   background-color: #fff;
   height: 15px;
   font-size: 14px;
   border-radius: 50%;
   margin-right: 15px;
   color: var(--P700);
   transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
   transition: all .7s ease-in-out;
   cursor: pointer;
   @media screen and (min-width:1000px){
    display: none;
   }
`

const Slider = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const { sliderActive, setSliderActive } = useContext(SliderContext)
    return (
        <SliderWrap sliderActive={sliderActive} >
            <div className={styles.navbarWrap}>
                <div className={styles.navbar}>
                    <Image className={styles.logo} src={logo} alt='logo' />
                    <div className={styles.navContentWrap}>
                        <Button value='Start a project' color='#000' bg='#fff' />
                        <Button value='Login' color='#000' bg='#fff' />
                        <div onClick={() => setSliderActive(false)} className={styles.coloredButton}>
                            <Button value={<IoCloseSharp style={{ fontSize: '20px', display: 'flex' }} />} color='#000' bg='#fff' />
                        </div>
                    </div>
                    <div className={styles.navContentWrapPhone}>
                        <div onClick={() => setSliderActive(false)}>
                            <Button value={<IoCloseSharp style={{ fontSize: '20px', display: 'flex' }} />} color='#000' bg='#fff' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.menuWrap}>
                <div className={styles.navLinks}>
                    <Link href='/Services' onClick={() => setSliderActive(false)} className={styles.navLink}>Services</Link>
                    <Link href='/Portfolio' onClick={() => setSliderActive(false)} className={styles.navLink}>Portfolio</Link>
                    <Link href='/AboutUs' onClick={() => setSliderActive(false)} className={styles.navLink}>About Us</Link>
                    <Link href='/ContactUs' onClick={() => setSliderActive(false)} className={styles.navLink}>Contact us</Link>
                </div>
                <div className={styles.rightContent}>
                    <PhoneMenu1 className={styles.services} open={open1}>
                        <div className={styles.iconContainer} onClick={() => setOpen1(!open1)}>
                            <h4>Top Services</h4>
                            <Icon open={open1}><AiOutlinePlus /></Icon>
                        </div>
                        <Link href='/Services/SearchEngineOptimization' onClick={() => setSliderActive(false)} className={styles.ServiceLink}>Search Engine Optimization</Link>
                        <Link href='/Services/SocialMediaMarketing' onClick={() => setSliderActive(false)} className={styles.ServiceLink}>Social Media Marketing</Link>
                        <Link href='/Services/InfluencerMarketing' onClick={() => setSliderActive(false)} className={styles.ServiceLink}>Influencer Marketing</Link>
                        <Link href='/Services/WebsiteDevelopment' onClick={() => setSliderActive(false)} className={styles.ServiceLink}>Website Development</Link>
                        <Link href='/Portfolio' onClick={() => setSliderActive(false)} className={styles.ServiceLink}>Case Studies</Link>
                    </PhoneMenu1>
                    <PhoneMenu2 className={styles.blogs} open={open2}>
                        <div className={styles.iconContainer} onClick={() => setOpen2(!open2)}>
                            <h4>New Blogs</h4>
                            <Icon open={open2} style={{marginRight:'30px'}}><AiOutlinePlus /></Icon>
                        </div>
                        <Link href='/blog' onClick={() => setSliderActive(false)} className={styles.blogLink}># The right time to hire a digital marketing agency for your brand is “right now”!</Link>
                        <Link href='/blog' onClick={() => setSliderActive(false)} className={styles.blogLink}># Pick the Digital Marketing Agency that picks up your Brand.</Link>
                        <Link href='/blog' onClick={() => setSliderActive(false)} className={styles.blogLink}># New is Good, sometimes better! Here is what you need to know about growing Digital marketing agencies.</Link>
                    </PhoneMenu2>
                </div>
            </div>
        </SliderWrap>
    )
}

export default Slider