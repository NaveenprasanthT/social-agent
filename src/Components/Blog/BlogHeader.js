import Button from "../Button";
import styles from '@/styles/Blog/BlogHeader.module.css';
import HeaderTag from '../../../public/assets/tag.png';
import Image from "next/image";
import Link from "next/link";

const BlogHeader = () => {
    return (
        <div className={styles.BlogHeaderContainer}>
            <div className={styles.BlogHeaderContent}>
                <div>
                    <h1>Blogs </h1>
                    <p>
                    Explore our insightful blog posts to stay updated on the latest trends, strategies, and tips in digital marketing. Enhance your online presence, drive traffic, and boost conversions with expert guidance.                    </p>
                </div>
                <Link href='/Start-A-Project' style={{ textDecoration: 'none',width:'100%' }}>
                    <div className={styles.ButtonContainer}>
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
            <div className={styles.HashImageContainer}>
                <Image src={HeaderTag} alt="No image" className={styles.HashImage} />
            </div>
            <Image src={HeaderTag} alt="No image" className={styles.HashImagePhne} />
        </div>
    )
}

export default BlogHeader;