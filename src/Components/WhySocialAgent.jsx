import React, { useEffect, useState } from 'react'
import styles from '@/styles/WhySocialAgent.module.css'
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';


const Title = styled.h1`
        font-weight: 500;
        font-weight: 500;
        font-size: 100px;
        color: var(--P700);
        text-align: center;  
        transform: translateY(100px);
        transform: ${({ inView }) => (inView ? 'translateY(0px)' : 'translateY(200px)')} ;
        transition: 2s ease-out;
    `;

const WhySocialAgent = () => {

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });


    const data = [
        {
            title: 'Lorem ipsum',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.'
        },
        {
            title: 'Lorem ipsum',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.'
        },
        {
            title: 'Lorem ipsum',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.'
        },
    ]


    return (
        <div className={styles.sectionWrap}  >
            <Title ref={ref} inView={inView} ><span style={{}} className={styles.praise}>Why </span>Social Agent <span className={styles.praise}>?</span></Title>
            <div className={styles.cardsWrap}>
                {
                    data.map((item, key) => (
                        <div key={key} className={styles.card}>
                            <div className={styles.title}>
                                {item.title}
                            </div>
                            <div className={styles.content}>
                                {item.content}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WhySocialAgent