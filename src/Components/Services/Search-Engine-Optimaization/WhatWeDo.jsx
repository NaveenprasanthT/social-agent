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
            image:'/assets/SEO/SEOImg1.png',
            btnText:'Keyword Research',
            desc:' Unlock the power of targeted words to boost your online presence and dominate search rankings.',
        },
        {
            key: 2,
            image:'/assets/SEO/SEOImg2.png',
            btnText:'On-Page Optimization',
            desc:'Fine-tune your website for maximum visibility, captivating search engines, and captivating audiences.',
        },
        {
            key: 3,
            image:'/assets/SEO/SEOImg3.png',
            btnText:'Technical SEO',
            desc:' Maximise the technical aspects of your website to ensure seamless performance and higher search rankings.',
        },
        {
            key: 4,
            image:'/assets/SEO/SEOImg4.png',
            btnText:'Link Building',
            desc:"Build a network of authoritative links that elevate your website's credibility and enhance search visibility.",
        },
        {
            key: 5,
            image:'/assets/SEO/SEOImg5.png',
            btnText:'Content Creation and Optimization', 
            desc:'Craft compelling content that resonates with your audience and ranks higher in search results.',
        },
        {
            key: 6,
            image:'/assets/SEO/SEOImg1.png',
            btnText:'Paid Search Advertising',
            desc:'Accelerate your online visibility and drive targeted traffic with strategic paid search campaigns.',
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