import Button from "../Button";
import styles from '@/styles/Blog/BlogHeader.module.css';
import HeaderTag from '../../../public/assets/tag.png';
import Image from "next/image";

const BlogHeader = () => {
    return(
        <div className={styles.BlogHeaderContainer}>
            <div className={styles.BlogHeaderContent}>
                <div>
                    <h1>Blogs </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur.
                        Amet accumsan eu ut vitae lacus. Ac ornare mollis ut pulvinar amet sed sit blandit at. 
                        Ornare pretium sit augue enim imperdiet malesuada egestas in quisque. Id et netus lorem morbi.                    </p>
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
            <div className={styles.HashImageContainer}>
                <Image src={HeaderTag} alt="No image"  className={styles.HashImage}/>
            </div>
            <Image src={HeaderTag} alt="No image"  className={styles.HashImagePhne}/>
        </div>
    )
}

export default BlogHeader;