import React, { useContext } from 'react'
import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import logo from '../../../public/assets/logo.png'
import Button from '../Button'
import { RiMenuFill } from 'react-icons/ri'
import { HoverContext, SliderContext } from '../../../Context'
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
    const { push } = useRouter();
    const { setSliderActive } = useContext(SliderContext);
    const { hoverActive } = useContext(HoverContext);
    return (
        <div className={styles.navbarWrap}>
            <div className={styles.navbar}>
                <div className={styles.logoWrap}>
                    {
                        hoverActive ?
                            <Typewriter className={styles.logoTxt}
                                options={{
                                    // strings: ['Hello', 'World'],
                                    autoStart: true,
                                    delay: 40,
                                    loop: false,
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString('<span style="color: #ffffff; font-size: 32px ">Let us be your Social Agent</span>')
                                        // .pauseFor(2500)
                                        // .deleteAll()
                                        .start();

                                }}
                            />
                            : <Image onClick={() => push('/')} className={styles.logo} src={logo} alt='logo' />


                    }

                </div>
                <div className={styles.navContentWrap}>
                    <Link href='/Start-A-Project'>
                        <Button className={styles.btn} value='Start a project' color='var(--P700)' bg='#fff' />
                    </Link>
                    <Button value='Login' color='var(--P700)' bg='#fff' />
                    <div onClick={() => setSliderActive(true)}>
                        <Button value={<RiMenuFill style={{ fontSize: '20px', display: 'flex' }} />} color='var(--P700)' bg='#fff' />
                    </div>
                </div>
                <div className={styles.navContentWrapPhone}>
                    <div onClick={() => setSliderActive(true)}>
                        <Button value={<RiMenuFill style={{ fontSize: '20px', display: 'flex' }} />} color='var(--P700)' bg='#fff' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar