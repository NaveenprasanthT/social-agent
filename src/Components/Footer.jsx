import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { HiArrowLongRight } from 'react-icons/hi2'


const Footer = () => {


    return (

        <div className={styles.footerWrap}>
            <div className={styles.contentWrap}>
                <div className={styles.left}>
                    <Image className={styles.logo} src={logo} alt='logo' />
                    <div className={styles.desc}>
                        Get exclusives<span style={{ fontWeight: '400' }}> digital marketing</span> updates straight to your inbox
                    </div>
                    <form action="" className={styles.formWrap}>
                        <input className={styles.emailField} required type="email" placeholder='Email address' />
                        <button className={styles.submitBtn} type='submit' ><HiArrowLongRight /> </button>
                    </form>
                    <div className={styles.iconWrap}>
                        <AiOutlineInstagram className={styles.icon} />
                        <FaFacebookF className={styles.icon} />
                        <AiOutlineTwitter className={styles.icon} />
                        <FaLinkedinIn className={styles.icon} />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.linkLeft}>
                        <div className={styles.heading}>Social Agent</div>
                        <Link className={styles.link} href='/' >Home</Link>
                        <Link className={styles.link} href='/' >About Us</Link>
                        <Link className={styles.link} href='/' >Our Works</Link>
                        <Link className={styles.link} href='/' >Blogs</Link>
                        <Link className={styles.link} href='/' >Careers</Link>
                        <Link className={styles.link} href='/' >Contact Us</Link>
                    </div>
                    <div className={styles.linkLeft}>
                        <div className={styles.heading}>Services</div>
                        <Link className={styles.link} href='/' >Social media marketing</Link>
                        <Link className={styles.link} href='/' >Influencer marketing</Link>
                        <Link className={styles.link} href='/' >Website development</Link>
                        <Link className={styles.link} href='/' >Photography / Videography</Link>
                        <Link className={styles.link} href='/' >Online reputation management</Link>
                        <Link className={styles.link} href='/' >Digital strategy & consulting</Link>
                        <Link className={styles.link} href='/' >Branding & print solution</Link>
                        <Link className={styles.link} href='/' >Email marketing</Link>
                        <Link className={styles.link} href='/' >SMS Marketing</Link>
                    </div>
                    <div className={styles.linkRight}>
                        <div className={styles.heading}>Policies</div>
                        <Link className={styles.link} href='/' >Privacy Policy</Link>
                        <Link className={styles.link} href='/' >Refund Policy</Link>
                        <Link className={styles.link} href='/' >Terms & Conditions</Link>
                    </div>
                </div>
            </div>
            <div className={styles.rights}>
                ©2023, Social Agent, all rights reserved
            </div>
        </div>
    )
}

export default Footer