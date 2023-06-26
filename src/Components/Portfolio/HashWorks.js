import styles from '@/styles/Portfolio/HashWorks.module.css';
import Image from 'next/image';
import tag from '../../../public/assets/tag.png';

const HashWorks = () => {
    return (
        <div className={styles.HashWorksContainer}>
            <div className={styles.HashWorksLeft}>
                <Image src={tag} className={styles.HashWorksImage} />
                <h1>Our Works</h1>
            </div>
            <div className={styles.HashWorksRight}>
                <div className={styles.HashWorksRightHeader}>
                    <h1>Our Works</h1>
                </div>
                <p>
                    With years of experience, we have had the opportunity to work
                    on a wide range of projects for clients from all over the world,
                    from building custom websites to developing complex web
                    applications in Webflow. Explore our portfolio to see some of
                    our most recent works and learn more about our experience
                    and capabilities.
                </p>
            </div>
        </div>
    );
}

export default HashWorks;