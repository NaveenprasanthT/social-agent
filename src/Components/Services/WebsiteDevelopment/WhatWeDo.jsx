import React, { useEffect, useState } from 'react'
import styles from '@/styles/SMMPage/WhatWeDo.module.css'
import Image from 'next/image'
import image from '../../../../public/assets/tempImg.png'
import styled from 'styled-components'
import Link from 'next/link'

import { Cards,Card1,Card2,Card3,Card4,Card5,Card6,CardBtn,CardImg,Overlay,Content,Cards2 } from '../styleForWWD'

const WhatWeDo = () => {
    const SMMData = [
        {
            key: 1,
            image:'/assets/Website/WMImg6.png',
            btnText:'Requirement analysis & Research:',
            desc:'The Planning and Research phase thoughtfully lays a solid foundation, setting the stage for the inspiring symphony of website development',
        },
        {
            key: 2,
            image:'/assets/Website/WMImg2.png',
            btnText:'Wireframing and Prototyping:',
            desc:' Transform ideas into visual blueprints, bringing concepts to life with precision and clarity.',
        },
        {
            key: 3,
            image:'/assets/Website/WMImg3.png',
            btnText:'Visual Design:',
            desc:'Craft visually stunning experiences that captivate audiences and leave a lasting impression.',
        },
        {
            key: 4,
            image:'/assets/Website/WMImg4.png',
            btnText:'Development',
            desc:'Bring your vision to reality with expert coding and seamless functionality.',
        },
        {
            key: 5,
            image:'/assets/Website/WMImg5.png',
            btnText:'Content Creation  & Integration', 
            desc:'Curate and integrate engaging content that resonates with your audience and enhances user experience',
        },
        {
            key: 6,
            image:'/assets/Website/WMImg1.png',
            btnText:'Testing and Deployment',
            desc:'Ensure flawless performance and smooth user interactions through rigorous testing and seamless deployment.',
        },
    ]

      const [scrollY, setScrollY] = useState(false);
      const [scrollY2, setScrollY2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > 525){
            setScrollY(true);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > 750){
            setScrollY2(true);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
        <div className={styles.WhatWeDoWrap}>
            <h3>How do we build your <span className={styles.WhatDoWrapSpan}>online community</span></h3>  
            {/*<TempCard className={styles.TempCard}>
                <TempCardImg1 condition={scrollY} src='/assets/SMM/SMMLeft.png' className={styles.TempCardImage1}/>
                <TempCardImg2 condition={scrollY} src='/assets/SMM/SMMCenter.png' className={styles.TempCardImage2}/>
                <TempCardImg3 condition={scrollY} src='/assets/SMM/SMMRight.png' className={styles.TempCardImage3}/>
            </TempCard>*/}
            <Cards condition={scrollY}>
                <Card1 condition={scrollY}>
                <Overlay></Overlay>
                    <Content>{SMMData[0].desc}</Content>
                    <CardImg condition={scrollY} src={SMMData[0].image}/>
                    <CardBtn condition={scrollY}>
                        {SMMData[0].btnText}
                    </CardBtn>    
                </Card1>
                <Card2 condition={scrollY}>
                <Overlay></Overlay>
                    <Content>{SMMData[1].desc}</Content>
                    <CardImg condition={scrollY} src={SMMData[1].image}/>
                    <CardBtn condition={scrollY}>
                        {SMMData[1].btnText}
                    </CardBtn>    
                </Card2>
                <Card3 condition={scrollY}>
                <Overlay></Overlay>
                    <Content>{SMMData[2].desc}</Content>
                    <CardImg condition={scrollY} src={SMMData[2].image}/>
                    <CardBtn condition={scrollY}>
                        {SMMData[2].btnText}
                    </CardBtn>    
                </Card3>
            </Cards>
            <Cards2 condition={scrollY2}>
                <Card4 condition={scrollY2}>
                <Overlay></Overlay>
                    <Content>{SMMData[3].desc}</Content>
                    <CardImg condition={scrollY2} src={SMMData[3].image}/>
                    <CardBtn condition={scrollY2}>
                        {SMMData[3].btnText}
                    </CardBtn>    
                </Card4>
                <Card5 condition={scrollY2}>
                <Overlay></Overlay>
                    <Content>{SMMData[4].desc}</Content>
                    <CardImg condition={scrollY2} src={SMMData[4].image}/>
                    <CardBtn condition={scrollY2}>
                        {SMMData[4].btnText}
                    </CardBtn>    
                </Card5>
                <Card6 condition={scrollY2}>
                <Overlay></Overlay>
                    <Content>{SMMData[5].desc}</Content>
                    <CardImg condition={scrollY2} src={SMMData[5].image}/>
                    <CardBtn condition={scrollY2}>
                        {SMMData[5].btnText}
                    </CardBtn>    
                </Card6>
            </Cards2>
            <div className={styles.PhoneCards}>
            {SMMData.map((item,key) => (
                <div className={styles.PhoneCard}  key={key}>
                    <h2>{item.btnText}</h2>
                    <div className={styles.PhoneCardImageContent}>
                        <div className={styles.PhoneCardImageContainer}>
                            <Image src={item.image} width={500} height={500} className={styles.PhoneCardImage}/>
                        </div>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default WhatWeDo