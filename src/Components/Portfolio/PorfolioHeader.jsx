import Button from "../Button";
import styles from '@/styles/Portfolio/PortfolioHeader.module.css';

const PortfolioHeader = () => {
    return(
        <div className={styles.PortfolioHeaderContainer}>
            <div className={styles.PortfolioHeaderContent}>
                <div>
                    <h1>Portfolio </h1>
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
        </div>
    )
}

export default PortfolioHeader;