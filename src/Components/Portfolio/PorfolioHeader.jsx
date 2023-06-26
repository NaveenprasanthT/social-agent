import Image from "next/image";
import Button from "../Button";
import styles from '@/styles/Portfolio/PortfolioHeader.module.css';
import Link from "next/link";

const PortfolioHeader = () => {
    return (
        <div className={styles.PortfolioHeaderContainer}>
            <div className={styles.PortfolioHeaderContent}>
                <div>
                    <h1>Portfolio </h1>
                    <Image src='/assets/portfolio/PortfolioHeader.png' alt='' width={1000} height={1000} className={styles.portfolioImagePhne} />
                    <p>
                        Explore our portfolio, a showcase of creativity, expertise, and dedication. From captivating designs to successful campaigns, experience our commitment to excellence in every project. Discover the culmination of our skills and achievements in one place.
                    </p>
                </div>
                <Link href='/Start-A-Project' style={{ textDecoration: 'none', width: '100%', display: 'felx', justifyContent: 'center', alignItems: 'center' }}>
                    <div className={styles.ButtonContainer} style={{ textDecoration: 'none', display: 'felx', justifyContent: 'center', alignItems: 'center' }}>
                        <div className={styles.absoluteContainer}></div>
                        <Button
                            color='var(--P700)'
                            bg='#fff'
                            value="GET SOCIAL"
                            fontSize="14px"
                            padding='12px 85px'
                            fontWeight='700'
                        />
                    </div>
                </Link>
            </div>
            <Image src='/assets/portfolio/PortfolioHeader.png' alt='' width={1000} height={1000} className={styles.portfolioImage2} />
            <Image src='/assets/tag.png' alt='' width={1000} height={1000} className={styles.portfolioImage1} />
        </div>
    )
}

export default PortfolioHeader;