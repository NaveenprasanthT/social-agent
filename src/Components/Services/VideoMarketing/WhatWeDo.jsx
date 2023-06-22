import React, { useEffect, useState } from 'react'
import styles from '@/styles/SMMPage/WhatWeDo.module.css'
import Image from 'next/image'
import image from '../../../../public/assets/tempImg.png'
import styled from 'styled-components'
import Link from 'next/link'

const Cards = styled.div`
    padding: 4% 0%;
    display: flex;display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:1.5rem;
    margin-top: ${({condition}) => (condition ? '1rem':'3rem')};
    transition: all 1.5s ease-in-out;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

const Cards2 = styled.div`
    padding: 4% 0%;
    display: flex;display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:1.5rem;
    margin-top: ${({condition}) => (condition ? '1rem':'3rem')};
    transition: all 1.5s ease-in-out;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

const Card1 = styled.div`
    position: relative;
    height: ${({condition}) => (condition ? '475px':'400px')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    transform:${({condition}) => (condition ? 'rotate(0deg)':'rotate(-18deg)')};
    left: ${({condition}) => (condition ? '0%':'67%')};
    transition: all 1.5s ease-in-out;
`

const Card2 = styled.div`
    position: relative;
    height: 475px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    bottom: ${({condition}) => (condition ? '0%':'-10%')};
    transition: all 1.5s ease-in-out;
`

const Card3 = styled.div`
    position: relative;
    height: ${({condition}) => (condition ? '475px':'400px')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    transform:${({condition}) => (condition ? 'rotate(0deg)':'rotate(18deg)')};;
    right: ${({condition}) => (condition ? '0%':'67%')};
    transition: all 1.5s ease-in-out;
`

const Card4 = styled.div`
    position: relative;
    height: ${({condition}) => (condition ? '475px':'400px')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    transform:${({condition}) => (condition ? 'rotate(0deg)':'rotate(-18deg)')};
    left: ${({condition}) => (condition ? '0%':'67%')};
    transition: all 1.5s ease-in-out;
`

const Card5 = styled.div`
    position: relative;
    height: 475px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    bottom: ${({condition}) => (condition ? '0%':'-10%')};
    transition: all 1.5s ease-in-out;
`

const Card6 = styled.div`
    position: relative;
    height: ${({condition}) => (condition ? '475px':'400px')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    transform:${({condition}) => (condition ? 'rotate(0deg)':'rotate(18deg)')};;
    right: ${({condition}) => (condition ? '0%':'67%')};
    transition: all 1.5s ease-in-out;
`

const Content = styled.p`
    z-index: 6;
    margin: 10% 8%;
    text-align: justify;
    font-size: 19px;
    font-weight: 500;
    opacity: 0;
    transition: all 0.9s ease-in-out;

    ${Card1}:hover & {
        opacity: 1;
    }
    ${Card2}:hover & {
        opacity: 1;
    }
    ${Card3}:hover & {
        opacity: 1;
    }
    ${Card4}:hover & {
        opacity: 1;
    }
    ${Card5}:hover & {
        opacity: 1;
    }
    ${Card6}:hover & {
        opacity: 1;
    }
`
const CardImg = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    transform: scale(1);    
    border-radius: 20px;
    z-index: ${({condition}) => (condition ? '5':'7')};
    transition: all 1s ease-in-out;
    
    
    ${Card1}:hover & {
        height: ${({condition}) => (condition ? '65%':'100%')};
    }

    ${Card2}:hover & {
        height: ${({condition}) => (condition ? '65%':'100%')};
    }

    ${Card3}:hover & {
        height: ${({condition}) => (condition ? '65%':'100%')};
    }
    ${Card4}:hover & {
        height: ${({condition}) => (condition ? '65%':'100%')};
    }

    ${Card5}:hover & {
        height: ${({condition}) => (condition ? '65%':'100%')};
    }

    ${Card6}:hover & {
        height: ${({condition}) => (condition ? '65%':'100%')};
    }
`

const CardBtn = styled.button`
    z-index: 6;
    margin: 7% 5%;
    outline: none;
    border: 1.45px solid #ffffff;
    border-radius: 5px;
    background: transparent;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 0%;
    opacity:  ${({condition}) => (condition ? '1':'0')};
    transition : all 3s ease-in-out;
    cursor: pointer;
`

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
            desc:'Goals are set, audiences are understood, and effective strategies take shape to increase the reach',
        },
        {
            key: 3,
            image:'/assets/SMM/SMMImg3.png',
            btnText:'Content Calendar Planning',
            desc:'Goals are set, audiences are understood, and effective strategies take shape to increase the reach',
        },
        {
            key: 4,
            image:'/assets/SMM/SMMImg4.png',
            btnText:'Content Curation & Design',
            desc:'Goals are set, audiences are understood, and effective strategies take shape to increase the reach',
        },
        {
            key: 5,
            image:'/assets/SMM/SMMImg5.png',
            btnText:'Campaign Creation & Promotion', 
            desc:'Goals are set, audiences are understood, and effective strategies take shape to increase the reach',
        },
        {
            key: 6,
            image:'/assets/SMM/SMMImg1.png',
            btnText:'Socail Media Marketing & Analytics',
            desc:'Goals are set, audiences are understood, and effective strategies take shape to increase the reach',
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
                    <Content>{SMMData[0].desc}</Content>
                    <CardImg condition={scrollY} src={SMMData[0].image}/>
                    <CardBtn condition={scrollY}>
                        {SMMData[0].btnText}
                    </CardBtn>    
                </Card1>
                <Card2 condition={scrollY}>
                    <Content>{SMMData[1].desc}</Content>
                    <CardImg condition={scrollY} src={SMMData[1].image}/>
                    <CardBtn condition={scrollY}>
                        {SMMData[1].btnText}
                    </CardBtn>    
                </Card2>
                <Card3 condition={scrollY}>
                    <Content>{SMMData[2].desc}</Content>
                    <CardImg condition={scrollY} src={SMMData[2].image}/>
                    <CardBtn condition={scrollY}>
                        {SMMData[2].btnText}
                    </CardBtn>    
                </Card3>
            </Cards>
            <Cards2 condition={scrollY2}>
                <Card4 condition={scrollY2}>
                    <Content>{SMMData[3].desc}</Content>
                    <CardImg condition={scrollY2} src={SMMData[3].image}/>
                    <CardBtn condition={scrollY2}>
                        {SMMData[3].btnText}
                    </CardBtn>    
                </Card4>
                <Card5 condition={scrollY2}>
                    <Content>{SMMData[4].desc}</Content>
                    <CardImg condition={scrollY2} src={SMMData[4].image}/>
                    <CardBtn condition={scrollY2}>
                        {SMMData[4].btnText}
                    </CardBtn>    
                </Card5>
                <Card6 condition={scrollY2}>
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