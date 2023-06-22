import Image from "next/image";
import Button from "../Button";
import styles from '@/styles/Portfolio/PortfolioHeader.module.css';

const PortfolioHeader = () => {
    return(
        <div className={styles.PortfolioHeaderContainer}>
            <div className={styles.PortfolioHeaderContent}>
                <div>
                    <h1>Portfolio </h1>
                    <Image src='/assets/portfolio/PortfolioHeader.png' alt='' width={1000} height={1000} className={styles.portfolioImagePhne}/>
                    <p>
                        creating and publishing content, such as text,
                        images and videos that is designed to engage the target audience and encourage them 
                        to take a specific action like making a purchase or visiting a website.
                    </p>
                </div>
                <Button
                    color='var(--P700)' 
                    bg='#fff' 
                    value="GET SOCIAL" 
                    fontSize="14px"
                    padding='12px 85px'
                    fontWeight='700'
                />               
            </div>
            <Image src='/assets/portfolio/PortfolioHeader.png' alt='' width={1000} height={1000} className={styles.portfolioImage2}/>
            <Image src='/assets/tag.png' alt='' width={1000} height={1000} className={styles.portfolioImage1}/>
        </div>
    )
}

export default PortfolioHeader;