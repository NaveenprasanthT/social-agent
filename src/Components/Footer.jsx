import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'


const Footer = () => {
    

    return (

        <div className={styles.footerWrap}>
            <div className={styles.contentWrap}>
                <div className={styles.left}>
                    <Image className={styles.logo} src={logo} alt='logo' />
                    <div className={styles.iconWrap}>
                        <AiOutlineInstagram className={styles.icon} />
                        <FaFacebookF className={styles.icon} />
                        <AiOutlineTwitter className={styles.icon} />
                        <FaLinkedinIn className={styles.icon} />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.linkLeft}>
                        <Link className={styles.link} href='/' >About us</Link>
                        <Link className={styles.link} href='/' >Service</Link>
                        <Link className={styles.link} href='/' >Portfolio</Link>
                        <Link className={styles.link} href='/' >Blogs</Link>
                        <Link className={styles.link} href='/' >Contact us</Link>
                        <Link className={styles.link} href='/' >Career</Link>
                    </div>
                    <div className={styles.linkRight}>
                        <Link className={styles.link} href='/' >Privacy Policy</Link>
                        <Link className={styles.link} href='/' >Refund Policy</Link>
                        <Link className={styles.link} href='/' >Terms & Conditions</Link>
                        <Link className={styles.link} href='/' >Blogs</Link>
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