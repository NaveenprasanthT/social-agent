import React, { useEffect } from 'react'
import styles from '@/styles/HashBanner.module.css'
import Image from 'next/image'
import hashImg from '../../public/assets/hash.webp'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const ImageWrap = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 600px;
        height: 70vh;
        object-fit: cover;
        transform: ${({ inView }) => (inView ? 'translateX(0vw)' : 'translateX(80vw)')} ;
        transition: 1.3s ease-out;
        @media (max-width: 900px){
            width: 450px;
            height: 50vh;
        }
        @media (max-width: 768px){
            width: 400px;
            height: 40vh;
        }
        @media (max-width: 478px){
            width: 300px;
            height: 30vh;
        }
    `;

const HashBanner = ({ p, h1, H1fontSize, pfontSize}) => {


    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });


    return (
        <>
            <div ref={ref} className={styles.banner}>
                <div className={styles.leftContent}>
                    <p style={{fontSize:pfontSize ? pfontSize : ""}}>{p}</p>
                    <h1 style={{fontSize:H1fontSize ? H1fontSize : ""}}>{h1}</h1>
                </div>
                <ImageWrap inView={inView}>

                    <Image src={hashImg} className={styles.hashImg}  alt='hash' />
                </ImageWrap>
            </div>
        </>
    )
}

export default HashBanner