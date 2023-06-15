import React from 'react'
import styles from '@/styles/Start-a-Project/StartAProjectSection.module.css'
import Image from 'next/image'
import img from '../../public/assets/startAProject.webp'
import Button from './Button'

const StartAProjectSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <div className={styles.left}>
                <Image className={styles.img} src={img} alt='Image' />
                <div className={styles.badge}>Let us be your Social Agent!</div>
            </div>
            <div className={styles.right}>
                <div className={styles.title}>
                    Ready to start your project?
                </div>
                <div className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur. Morbi in mattis aliquam amet dui duis. Vulputate enim pellentesque odio eget.
                    Vel facilisis libero metus morbi nec quis a mi non. Id porta lorem quis risus nunc aliquam mi donec nisl. Ultrices sed orci porttitor praesent.
                    Leo velit aenean lorem maecenas turpis tempus volutpat. Diam risus et lorem tortor. Metus in lacus mauris massa mi.
                    Tincidunt mauris porttitor ut turpis. Est metus molestie risus enim auctor nam.
                </div>
                <Button value='BOOK FREE CONSULTATION' color='#fff' bg='var(--P700)' />
            </div>
        </div>
    )
}

export default StartAProjectSection