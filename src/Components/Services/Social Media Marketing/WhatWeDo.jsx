import React, { useState } from 'react'
import styles from '@/styles/SMMPage/WhatWeDo.module.css'
import Image from 'next/image'
import image from '../../../../public/assets/tempImg.png'
import styled from 'styled-components'
import Link from 'next/link'


const Img = styled(Image)`
    width: 400px;
    height: 500px;
    height: ${({ hover, id }) => (hover === id ? '250px' : '500px')};
    border-radius: 15px;
    object-fit: cover;
    object-position: top center;
    transition: 0.7s;
`;

const Content = styled.div`
    position: absolute;
    bottom: 10px;
    left: 4px;
    transition:all 2s ease-in-out;
    opacity: ${({ hover, id }) => (hover === id ? '100%' : '0')};

    
`;

const WhatWeDo = () => {
    const [hover, setHover] = useState(false);


    const data = [
        {
            id: '01',
            title: 'Headline Goes Here',
            desc: 'Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun LoremLorem ipsun Lorem ipsun Lorem ipsun.',
            url: '/',
        },
        {
            id: '02',
            title: 'Headline Goes Here',
            desc: 'Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun LoremLorem ipsun Lorem ipsun Lorem ipsun.',
            url: '/',
        },
        {
            id: '03',
            title: 'Headline Goes Here',
            desc: 'Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun LoremLorem ipsun Lorem ipsun Lorem ipsun.',
            url: '/',
        },
    ]

    return (
        <div className={styles.WhatWeDoWrap}>
            <h3>How do we build your online community</h3>
            <div className={styles.TempCard}>
                <img src='/assets/SMM/SMMLeft.png' className={styles.TempCardImage1}/>
                <img src='/assets/SMM/SMMCenter.png' className={styles.TempCardImage2}/>
                <img src='/assets/SMM/SMMRight.png' className={styles.TempCardImage3}/>
            </div>
            {/*<div className={styles.cards}>
                {
                    data.map((item, key) => (
                        <div key={key} onMouseEnter={() => setHover(item.id)} onMouseLeave={() => setHover(false)} className={styles.card}>
                            <Img hover={hover} id={item.id} className={styles.img} src={image} alt='image' />
                            <Content hover={hover} id={item.id} className={styles.content}>
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                                <Link href={item.url} className={styles.knowMore}>KNOW MORE</Link>
                            </Content>
                        </div>
                    ))
                }
            </div>*/}
        </div>
    )
}

export default WhatWeDo