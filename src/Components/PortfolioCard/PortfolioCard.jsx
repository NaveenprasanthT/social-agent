import React from 'react'
import { CardWrap, ContentWrap, Badge, Badge2, Content, MoreBtn, Img, ServiceWrap, Button } from './PortfolioCardEle'
import styles from '@/styles/Portfolio.module.css'
import img from '../../../public/assets/tempImg.png'

const PortfolioCard = () => {
    return (
        <CardWrap >
            <Badge2>FINTECH</Badge2>
            <ContentWrap>
                <Badge>FINTECH</Badge>
                <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</Content>
                <MoreBtn>KNOW MORE</MoreBtn>
            </ContentWrap>
            <Img src={img} alt='image' />
            {/* <ServiceWrap>
                <Button>Social Media Marketing</Button>
            </ServiceWrap> */}
        </CardWrap>
    )
}
export default PortfolioCard


