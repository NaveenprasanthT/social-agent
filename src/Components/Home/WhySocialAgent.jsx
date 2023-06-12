import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home/WhySocialAgent.module.css'
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';


const Title = styled.h1`
        font-weight: 500;
        font-weight: 500;
        font-size: ${({ inView }) => (inView ? '100px' : '140px')} ;
        color: var(--P700);
        text-align: center;  
        transform: translateY(100px);
        transform: ${({ inView }) => (inView ? 'translateY(0px)' : 'translateY(100px)')} ;
        transition: 0.6s ease-out;
    `;

const WhySocialAgent = () => {

    const { ref, inView } = useInView({
        threshold: 0.7,
        triggerOnce: true
    });


    const data = [
        {
            id: '1',
            title: 'Creative Catalysts',
            content: 'Transform ideas into creative reality, we intricately craft digital masterpieces that transcend the ordinary, propelling your brand to unparalleled heights in the dynamic online realm.'
        },
        {
            id: '2',
            title: 'Agile Innovators',
            content: 'Adapting swiftly to changes, our approach is to be flexible in fast-paced environments. Fostering collaboration, we ensure consistent delivery of high-quality results within given timeframes.'
        },
        {
            id: '3',
            title: 'Target Driven',
            content: 'Focused on achieving specific business outcomes, we meticulously track progress, utilize analytics to measure results, and optimize strategies to drive growth, ensuring your success.'
        },
    ]


    return (
        <div className={styles.sectionWrap}  >
            <Title ref={ref} inView={inView} ><span style={{}} className={styles.praise}>Why </span>Social Agent <span className={styles.praise}>?</span></Title>
            <div className={styles.cardsWrap}>
                {
                    data.map((item, key) => (
                        <div key={key} className={styles.card}>
                            <div className={styles.contentWrap}>
                                <div className={styles.title}>
                                    {item.title}
                                </div>
                                <div className={styles.content}>
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WhySocialAgent