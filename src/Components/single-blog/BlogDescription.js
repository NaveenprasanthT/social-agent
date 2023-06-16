import styles from "@/styles/SingleBlog/BlogDescription.module.css";

const BlogDescription = ({blogData}) => {
    const data = blogData;
    return(
        <div className={styles.BlogDescriptionContainer}>
            <div className={styles.BlogDescriptionLeft}>
                {data.description.map((item) => (
                    <div className={styles.BlogLeftContent}>
                        {item.title && <h3>{item.title}</h3>}
                        <p>{item.content}</p>
                    </div>
                ))}
                <p>{data.last && data.last}<span>{data.pink}</span>{data.last && data.last1}</p>
            </div>
            <div className={styles.BlogDescriptionRight}>
                <div className={styles.BlogRight}>
                    <h3>Check out how to <span>improve the effectiveness of your website</span> and increase its conversion rate.</h3>
                    <p><b>Step by step,</b> we will present you the unique opportunities that are waiting for you.</p>
                    <button>BOOK <span>FREE</span> CONSULTAION</button>    
                </div>
                <div className={styles.BlogRight}>
                    <h3>Here are some of our case studies that showcase how we have improved <span>website effectiveness</span></h3>
                    <p>We have redesigned and increased the usability of many of our clients' websites.</p>
                    <button><span>OUR</span> WORKS</button>
                </div>
            </div>
        </div>
    )
}

export default BlogDescription;