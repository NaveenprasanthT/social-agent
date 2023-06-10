import React from 'react'
import styles from '@/styles/ServicesPage/Services.module.css'
import Image from 'next/image'
import bannerHash from '../../../public/assets/hash.png'
import Button from '../Button'
import { CgCodeSlash } from 'react-icons/cg'
import Link from 'next/link'


const MainServicePage = () => {

    const data = [
        {
            id: '01',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            desc: 'Lorem ipsum dolor sit amet consectetur. Condimentum ultrices aliquam adipiscing pellentesque.',
            url: '/Services/SocialMediaMarketing',
        },
        {
            id: '02',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            desc: 'Lorem ipsum dolor sit amet consectetur. Condimentum ultrices aliquam adipiscing pellentesque.',
            url: '/',
        },
        {
            id: '03',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            desc: 'Lorem ipsum dolor sit amet consectetur. Condimentum ultrices aliquam adipiscing pellentesque.',
            url: '/',
        },
        {
            id: '04',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            desc: 'Lorem ipsum dolor sit amet consectetur. Condimentum ultrices aliquam adipiscing pellentesque.',
            url: '/',
        },
        {
            id: '05',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            desc: 'Lorem ipsum dolor sit amet consectetur. Condimentum ultrices aliquam adipiscing pellentesque.',
            url: '/',
        },
        {
            id: '06',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            desc: 'Lorem ipsum dolor sit amet consectetur. Condimentum ultrices aliquam adipiscing pellentesque.',
            url: '/',
        },
        {
            id: '07',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            desc: 'Lorem ipsum dolor sit amet consectetur. Condimentum ultrices aliquam adipiscing pellentesque.',
            url: '/',
        },
        {
            id: '08',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            desc: 'Lorem ipsum dolor sit amet consectetur. Condimentum ultrices aliquam adipiscing pellentesque.',
            url: '/',
        },
    ]
    return (
        <>
            <div className={styles.heroSection}>
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur.
                    Consectetur feugiat bibendum mattis sed vel maecenas gravida faucibus.</p>
                <div className={styles.emailWrap}>
                    If you could not find any information, please contact us at
                    <br></br>
                    <a href="mailto:info@socialagent.in">info@socialagent.in</a>
                </div>
                <Image className={styles.bannerHash} src={bannerHash} alt='hash image' />
            </div>
            <div className={styles.cards}>
                {
                    data.map((item, key) => (
                        <div key={key} className={styles.card}>
                            <div>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.desc}>{item.desc}</div>
                            </div>
                            <div className={styles.bottomWrap}>
                                <Link href={item.url}>
                                    <Button value='Know more' bg='var(--P700)' color='#fff' />
                                </Link>
                                <CgCodeSlash className={styles.codeIcon} />
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default MainServicePage