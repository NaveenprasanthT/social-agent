import React, { useEffect, useState } from 'react'
import Button from '../Button'
import Link from 'next/link'
import Work from './OurWork'
import HashBanner from '../HashBanner'
import styled from 'styled-components'
import ServiceBanner from './ServiceBanner'
import Carousel from '../Home/PortfolioBlog/Carousel'

const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 3%;
    justify-content: center;
    gap: 10px;
    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const BorderWrapper = styled.div`
    position: relative;
    background: linear-gradient(to right,  #38405F -20%, #B388EB 92.67%, #F7AEF8 121%);
    padding: 1.3px 1.2px;
    border-radius: 11px;
`
const Title = styled.div`
    font-weight: 600;
    font-size: 16px;
    transition: all 0.5s ease-in-out;
    @media screen and (max-width: 768px) {
    }
`

const HoverOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/assets/heroBg.webp');
    background-size: cover;
    opacity: 0;
    transition: opacity 1.5s ease;
    pointer-events: none;
`

const TopWrap = styled.div`
    z-index: 5;
`



const Desc = styled.p`
    font-weight: 400;
    font-size: 9px;
    margin-top: 6%;
    transition: all 0.5s ease-in-out;
`

const BottomWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 5;
`

const BottomWrapBtn = styled.button`
    font-size: 10px;
    font-weight: 500;
    color: #fff;
    background-color: var(--P700);
    padding: 6px 21px;
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`

const BackgroundContainer = styled.div`
    position:absolute;
    right: 30px;
    bottom: 20px;
    width: 90px;
    height: 90px;
    background-image: url(${props => props.Img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.7s ease-in-out;
    z-index: 6;
`

const Card = styled.div`
    position: relative;
    background-color: white;
    color: #40486c;
    height: 210px;
    padding: 10% 10%;
    border-radius: 10px;
    display: grid;
    grid-template-column: 1fr 1fr;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    &:hover ${Title} {
        color: #ffffff;
      }
    &:hover ${Desc} {
        color: #ffffff;
      }
    &:hover ${HoverOverlay} {
        opacity: 1;
    }
    &:hover ${BottomWrapBtn} {
        background-color: #fff;
        color: var(--P700);
    }
    &:hover ${BackgroundContainer} {
        transform: scale(1.3);
        background-image: url(${props => props.ImgHover})
    }
    @media screen and (max-width: 500px) {
        height: 200px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`

const MainServicePage = () => {

    const [mobileView, setMobileView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth<=500){
        setMobileView(true)
      }else{
        setMobileView(false)
      }
    };

    // Initial screen size
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const data = [
        {
            id: '01',
            title: 'Social Media Marketing',
            desc: 'From content creation to campaign management, we handle every aspect of your SMM with expertise.',
            img:'/assets/Services/service1.png',
            imgHover:'/assets/Services/serviceHover1.png',
            url: '/Services/SocialMediaMarketing',
        },
        {
            id: '02',
            title: 'Search Engine Optimization & Marketing  ',
            desc: "From keyword research to ranking, entrust your SEO & SEM marketing journey to our specialists.",
            imgHover:'/assets/Services/serviceHover2.png',
            img:'/assets/Services/service2.png',
            url: '/Services/SearchEngineOptimization',
        },
        {
            id: '03',
            title: 'Influencer Marketing',
            desc: 'From identifying influencers to crafting collaborations, we handle everything.',
            imgHover:'/assets/Services/serviceHover3.png',
            img:'/assets/Services/service3.png',
            url: '/Services/InfluencerMarketing',
        },
        {
            id: '04',
            title: 'Website Development',
            desc:"From design to deployment, we ensure seamless execution of all aspects of your brand's website.",
            imgHover:'/assets/Services/serviceHover4.png',
            img:'/assets/Services/service4.png',
            url: '/Services/WebsiteDevelopment',
        },
        {
            id: '05',
            title: 'Photography / Videography',
            desc: ' From consistent visuals to aesthetic product highlights , we capture the essence of your Brand.',
            imgHover:'/assets/Services/serviceHover5.png',
            img:'/assets/Services/service5.png',
            url: '/Services/Photography',
        },
        {
            id: '06',
            title: 'Online reputation Management',
            desc: 'From reputation monitoring to proactive management, we expertly handle every aspect of your digital brand presence.',
            imgHover:'/assets/Services/serviceHover6.png',
            img:'/assets/Services/service6.png',
            url: '/Services/OnlineReputationManagement',
        },
        {
            id: '08',
            title: 'Brand & Print Solutions',
            desc: "From Reach to Metrics we got you covered in all aspects of performance marketing.",
            imgHover:'/assets/Services/serviceHover8.png',
            img:'/assets/Services/service8.png',
            url: '/Services/Brand',
        },
        {
            id: '09',
            title: 'Email marketing',
            desc: 'From creating engaging email content to drive click-through rates, we ensure an effective email marketing campaign.',
            imgHover:'/assets/Services/serviceHover9.png',
            img:'/assets/Services/service9.png',
            url: '/Services/EmailMarketing',
        },
        {
            id: '10',
            title: 'SMS marketing',
            desc: 'From writing tailored messages to reaching out to individual recipients, we manage SMS marketing.',
            imgHover:'/assets/Services/serviceHover10.png',
            img:'/assets/Services/service10.png',
            url: '/Services/SMSMarketing',
        },
        {
            id: '11',
            title: 'Video marketing',
            desc: 'From Concept to Conversion, We Master Your Video Marketing Journey.',
            imgHover:'/assets/Services/serviceHover11.png',
            img:'/assets/Services/service11.png',
            url: '/Services/VideoMarketing',
        },
        {
            id: '12',
            title: 'WhatsApp Marketing',
            desc: 'From writing tailored messages to reaching out to individual recipients, we manage SMS marketing.',
            imgHover:'/assets/Services/serviceHover12.png',
            img:'/assets/Services/service12.png',
            url: '/Services/WhatsappMarketing',
        },
        {
            id: '14',
            title: 'Performance Marketing',
            desc: 'From writing tailored messages to reaching out to individual recipients, we manage SMS marketing.',
            imgHover:'/assets/Services/serviceHover14.png',
            img:'/assets/Services/service14.png',
            url: '/Services/Performance',
        },
    ];

    return(
        <>
            <ServiceBanner/>
            <Cards>
                {
                    data.map((item, key) => (
                        <BorderWrapper  key={key}>
                        <Link href={item.url} style={{textDecoration:'none'}}>
                        <Card ImgHover={item.imgHover}>
                            <TopWrap>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                            </TopWrap>
                            <BottomWrap>
                                <Link href={item.url}>
                                    <BottomWrapBtn>Know more</BottomWrapBtn>
                                </Link>
                            </BottomWrap>
                            <BackgroundContainer Img={item.img}></BackgroundContainer>
                            <HoverOverlay></HoverOverlay>
                        </Card>
                        </Link>
                        </BorderWrapper>
                    ))
                }
            </Cards>
            <HashBanner p='Let Us Be Your' h1='SOCIAL AGENT'/>
            <Work/>
            <Carousel mobile={mobileView}/>
            <ButtonContainer>
                <Button
                    value="View More"
                    color="#ffffff"
                    bg='var(--P700)'
                />
            </ButtonContainer>
        </>
    )
}

export default MainServicePage;