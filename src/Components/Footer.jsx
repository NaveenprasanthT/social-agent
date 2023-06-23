import React, { useState } from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import logo from '../../public/assets/footerLogo.png'
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { HiArrowLongRight } from 'react-icons/hi2'
import styled from 'styled-components'
import { AiOutlinePlus,AiOutlineClose } from 'react-icons/ai';

const PhoneMenu = styled.div`
@media screen and (max-width:500px){
 height: ${({open}) => (open ? '15.5rem' : '3rem')};
 border-bottom: ${({open}) => (open ? 'none' : '1px solid #ffffff')};
 overflow: hidden;
 transition: all 1s ease-in-out;    
}
`

const PhoneMenu1 = styled.div`
@media screen and (max-width:500px){
    height: ${({open}) => (open ? '22rem' : '3rem')};
    border-bottom: ${({open}) => (open ? 'none' : '1px solid #ffffff')};
    overflow: hidden;
    transition: all 1s ease-in-out;
   }`

const PhoneMenu2 = styled.div`
@media screen and (max-width:500px  ){
    height: ${({open}) => (open ? '10rem' : '3rem')};
    border-bottom: ${({open}) => (open ? 'none' : '1px solid #ffffff')};
    overflow: hidden;
    transition: all 1s ease-in-out;   
   }`

const Icon = styled.div`
   background-color: #fff;
   height: max-content;
   weight: max-content;
   padding: 0 5px;
   padding-top: 4px;
   font-size: 14px;
   border-radius: 50%;
   margin-right: 15px;
   color: var(--P700);
   transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
   transition: all .7s ease-in-out;
   cursor: pointer;
   @media screen and (min-width:500px){
    display: none;
   }
`


const Footer = () => {
    const [open1,setOpen1] = useState(false);
    const [open2,setOpen2] = useState(false);
    const [open3,setOpen3] = useState(false);
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
                    <PhoneMenu className={styles.linkLeft} open={open1}>
                        <div className={styles.iconContainer}  onClick={() => setOpen1(!open1)}>
                            <div className={styles.heading}>Social Agent</div>
                            <Icon open={open1}><AiOutlinePlus/></Icon>
                        </div>
                        <Link className={styles.link} href='/' >Home</Link>
                        <Link className={styles.link} href='/AboutUs' >About Us</Link>
                        <Link className={styles.link} href='/Portfolio' >Our Works</Link>
                        <Link className={styles.link} href='/blog' >Blogs</Link>
                        <Link className={styles.link} href='/' >Careers</Link>
                        <Link className={styles.link} href='/ContactUs' >Contact Us</Link>
                    </PhoneMenu>
                    <PhoneMenu1 className={styles.linkLeft} open={open2}>
                    <div className={styles.iconContainer}  onClick={() => setOpen2(!open2)}>
                        <div className={styles.heading}>Services</div>
                        <Icon open={open2}><AiOutlinePlus/></Icon>
                        </div>
                        <Link className={styles.link} href='/Services/SocialMediaMarketing' >Social media marketing</Link>
                        <Link className={styles.link} href='/Services/InfluencerMarketing' >Influencer marketing</Link>
                        <Link className={styles.link} href='/Services/WebsiteDevelopment' >Website development</Link>
                        <Link className={styles.link} href='/Services/Photography' >Photography / Videography</Link>
                        <Link className={styles.link} href='/Services/OnlineReputationManagement' >Online reputation management</Link>
                        <Link className={styles.link} href='/Services/DigitalStrategy' >Digital strategy & consulting</Link>
                        <Link className={styles.link} href='/Services/Brand' >Branding & print solution</Link>
                        <Link className={styles.link} href='/Services/EmailMarketing' >Email marketing</Link>
                        <Link className={styles.link} href='/Services/SMSMarketing' >SMS Marketing</Link>
                    </PhoneMenu1>
                    <PhoneMenu2 className={styles.linkRight} open={open3}>
                        <div className={styles.iconContainer}  onClick={() => setOpen3(!open3)}>
                            <div className={styles.heading}>Policies</div>
                            <Icon open={open3}><AiOutlinePlus/></Icon>
                        </div>
                        <Link className={styles.link} href='/policy/refundPolicy' >Refund Policy</Link>
                        <Link className={styles.link} href='/policy/termsConditions' >Terms & Conditions</Link>
                        <Link className={styles.link} href='/policy/cookiesPolicy' >Website Cookies Policy</Link>
                    </PhoneMenu2>
            </div>
            <div className={styles.PoweredBy}>
                    <p>Powered By</p>
                    <Image src='/assets/Bricstal_Group.png' width={500} height={500} className={styles.BricstalImagePhne}/>
                </div>
            <div className={styles.rights}>
                <div>
                    <p>Powered By</p>
                    <Image src='/assets/Bricstal_Group.png' width={500} height={500} className={styles.BricstalImage}/>
                </div>
                ©2023, Social Agent, all rights reserved
            </div>
        </div>
    )
}

export default Footer