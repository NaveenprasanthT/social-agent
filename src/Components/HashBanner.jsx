import React, { useEffect } from 'react'
import styles from '@/styles/HashBanner.module.css'
import { BsArrowDownCircle } from 'react-icons/bs'
import Image from 'next/image'
import hashImg from '../../public/assets/hash.png'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const Img = styled(Image)`
        position: absolute;
        top: 0;
        left: 0;
        width: 600px;
        height: 70vh;
        object-fit: cover;
        transform: ${({ inView }) => (inView ? 'translateX(0vw)' : 'translateX(80vw)')} ;
        transition: 1.3s ease-out;
       
    `;

const HashBanner = ({ p, h1 }) => {


    const { ref, inView } = useInView({
        threshold: 0,
        // triggerOnce: true
    });


    return (
        <>
            <div ref={ref} className={styles.banner}>
                <div className={styles.leftContent}>
                    <p>{p}</p>
                    <h1>{h1}</h1>
                </div>
                <Img inView={inView} className={styles.hashImg} src={hashImg} alt='hash' />
            </div>
        </>
    )
}

export default HashBanner