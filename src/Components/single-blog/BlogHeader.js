import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Button from "../Button";
import styles from '@/styles/SingleBlog/SingleBlogHeader.module.css'

const BlogHeader = () => {
    return(
        <div className={styles.SingleBlogHeaderContainer}>
            <Image src={logo} className={styles.SingleBlogHeaderImage}/>
            <Button 
                bg='#354673' 
                color='#fff' 
                value="Get Started" 
                fontSize="14px"
                borderRadius='50px'
                padding='14px 45px'
            /> 
        </div>
    )
}

export default BlogHeader;