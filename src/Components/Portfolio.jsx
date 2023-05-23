import React from 'react'
import styles from '@/styles/Portfolio.module.css'
import PortfolioCard from './PortfolioCard/PortfolioCard'


const Portfolio = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <div className={styles.cardsWrap}>
                <PortfolioCard />
            </div>
        </div>
    )
}

export default Portfolio