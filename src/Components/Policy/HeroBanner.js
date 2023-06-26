import styles from '@/styles/Policy/termsConditions.module.css';
import HeaderTag from '../../../public/assets/tag.png';
import Image from "next/image";
import Link from 'next/link';

const HeroBanner = ({data}) => {
    return(
        <div className={styles.BlogHeaderContainer}>
            <div className={styles.BlogHeaderContent}>
                <div>
                    <h1>{data.title}</h1>
                    <p>
                        {data.desc}
                    </p>
                </div> 
                <div className={styles.information}>
                    <p>If you could not find any information, please contact us at</p>
                    <span>
                        <Link href="mailto:info@socialagent.in">info@socialagent.in</Link>
                    </span>
                </div>
            </div>
            <div className={styles.HashImageContainer}>
                <Image src={HeaderTag} alt="No image"  className={styles.HashImage}/>
            </div>
        </div>
    )
}

export default HeroBanner;