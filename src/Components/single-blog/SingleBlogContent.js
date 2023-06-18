import styles from '@/styles/SingleBlog/SingleBlogContent.module.css';
import Image from 'next/image';
import Button from '../Button';

const SingleBlogContent = ({blogData}) => {

    const data = blogData;

    return(
        <div>
        <div className={styles.SingleBlogContainer}>
            <h4>Blogs &lt; Digital Marketing agency</h4>
            <h1>
                {data.text1}
                <span>
                    {data.text2}
                </span>
                {data.text3}
            </h1>
            <p>{data.desc}</p>
            <div className={styles.SingleBlogImageContainer}>
                <Image 
                    src={data.image}
                    width={1000}
                    height={1000}
                    className={styles.SingleBlogImage}    
                />
            </div>
            <h6>Name | Date | Read Time</h6>
            <Button 
                bg='#354673' 
                color='#fff' 
                value="Download Our E-Broucher" 
                fontSize="24px"
                borderRadius='50px'
                padding='14px 45px'
            />
        </div>
        </div>
    )
}

export default SingleBlogContent;