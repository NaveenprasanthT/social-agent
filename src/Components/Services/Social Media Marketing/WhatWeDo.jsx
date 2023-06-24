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
            image:'/assets/SMM/SMMImg1.png',
            btnText:'Planning & Strategy Development',
            desc:'Goals are set, audiences are understood, and effective strategies take shape to increase the reach',
        },
        {
            key: 2,
            image:'/assets/SMM/SMMImg2.png',
            btnText:'Brand Engagement',
            desc:'Brand engagement is done to build authentic connections with the audience, initiate good communication to endure the relationship.',
        },
        {
            key: 3,
            image:'/assets/SMM/SMMImg3.png',
            btnText:'Content Calendar Planning',
            desc:'As the ideas flourish & themes align, captivating content is created to reach the right people at the right time.',
        },
        {
            key: 4,
            image:'/assets/SMM/SMMImg4.png',
            btnText:'Content Curation & Design',
            desc:'The content is given a visual creative form by seamlessly blending artistry & logic to narrate the story of your brand.',
        },
        {
            key: 5,
            image:'/assets/SMM/SMMImg5.png',
            btnText:'Campaign Creation & Promotion', 
            desc:'Innovative concepts ignite, strategies unfold to amplify Brand presence and showcase it to target audience.',
        },
        {
            key: 6,
            image:'/assets/SMM/SMMImg6.png',
            btnText:'Socail Media Marketing & Analytics',
            desc:' Trends unveil, data whispers stories, valuable insights shape informed decisions, empowering strategic growth.',
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