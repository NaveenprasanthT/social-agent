import styles from '@/styles/SingleBlog/ScrollBlog.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowDownRight } from 'react-icons/fi';

const ScrollBlog = ({blogData}) => {
    const data = blogData;
    const AddtionalData = [
        {
            key:'blog1',
            text1:'The Right Time to Hire a Digital Marketing Agency for Your Brand Is ',
            text2:`“Right Now”!`,
            text3:'',
            desc:`In today's digital world, the success of your business hinges on your ability to effectively navigate the online landscape. To stand out from the competition and reach your target audience, it's crucial to leverage the expertise of a digital marketing agency. But when is the optimal time to make that move? The answer is simple: the right time is "right now." Here's why:`,
            image:'/assets/Blog/img1.png'
        },

        {
            key:'blog2',
            text1:'Pick the Digital Marketing Agency that',
            text2:' picks up your Brand',
            text3:'',
            desc:"In today's digital world, the success of your business hinges on your ability to effectively navigate the online landscape. To stand out from the competition and reach your target audience, it's crucial to leverage the expertise of a digital marketing agency. But when is the optimal time to make that move? The answer is simple: the right time is 'right now.' Here's why:",
            image:'/assets/Blog/img2.png'
        },
        {
            key:'blog3',
            text3:' Here is what you need to know about growing Digital marketing agencies.',
            text2:'New is Good, sometimes better!',
            text1:'',
            desc:"In digital world, small businesses need effective marketing strategies to compete and thrive. Surprisingly, new marketing agencies are emerging as powerful allies for small businesses, outperforming established & so called top digital marketing companies in Bangalore.",
            image:'/assets/Blog/img3.png'
        },
        {
            key:'blog4',
            text1:'Are you a start-up thinking about Digital marketing Partner? Think of these',
            text2:' 10 advantages ',
            text3:'before you decide!',
            desc:"We all know that startups need a strong online presence to compete and succeed. Partnering with the best digital marketing agency can provide numerous advantages for startups. ",
            image:'/assets/Blog/img4.png'
        },
        {
            key:'blog5',
            text1:`“E-commerce websites need not be creative”.`,
            text2:` Trust us, it's a myth!`,
            text3:'',
            desc:"In the competitive world of e-commerce, standing out from the crowd is crucial. One way to capture the attention of potential customers is through a creative design for your e-commerce website. Let's explore the benefits and reasons why having a creative design can make a significant impact on the success of your online business.",
            image:'/assets/Blog/img5.png'
        },
        {
            key:'blog6',
            text1:'Are you of the opinion that website costs too much & is',
            text2:'“ A Burn on Your Budget?',
            text3:' You are wrong!',
            desc:"Social media marketing is crucial for the success of new businesses in today’s world. However, navigating the complex world of social media can be overwhelming. Choosing the right social media marketing agency is vital to effectively reach your target audience and achieve your business goals. Here are some essential factors to consider when selecting the perfect agency for your new venture.",
            image:'/assets/Blog/img6.png'
        },
        {
            key:'blog7',
            text1:'Wondering what does it ',
            text2:' Takes To Be The Best Social Media Marketing Agency?',
            text3:' These strategies followed by top agencies will help you understand it better!',
            desc:"Social media marketing has become an essential component of a successful digital marketing strategy.",
            image:'/assets/Blog/img7.png'
        },
        {
            key:'blog8',
            text3:' can make your Brand more visible. Know how to choose the right one!',
            text2:'A Good SEO Partner',
            text1:'',
            desc:`In today's digital world, the success of your business hinges on your ability to effectively navigate the online landscape. To stand out from the competition and reach your target audience, it's crucial to leverage the expertise of a digital marketing agency. But when is the optimal time to make that move? The answer is simple: the right time is "right now." Here's why:`,
            image:'/assets/Blog/img8.png'
        },
    ];

    const slicedValues = AddtionalData.filter(value => value.key !== data.key)
    const shuffledList = slicedValues.sort(() => 0.5 - Math.random());
    const selectedItems = shuffledList.slice(0, 3);


    return (
        <div className={styles.BlogContentContainer}>
        {selectedItems.map((item) => (
            data.key !== item.key && 
            <div className={styles.BlogContent}>
                    <Image 
                        src={item.image} 
                        alt='' 
                        width={300} 
                        height={300}
                        className={styles.BlogContentImage}
                    />
                <h3>
                    {item.text1}
                    <span>
                        {item.text2}
                    </span>
                    {item.text3}
                </h3>
                <p>{item.desc}</p>
                <div>
                    <span>Read</span>
                    <Link href={`/${item.key}`} style={{padding:'0 0 0 5px',color: 'var(--P500)', fontSize:'16px'}}>
                        <span><FiArrowDownRight/></span>
                    </Link>
                </div>
            </div>
        ))}
    </div>
    )
}

export default ScrollBlog;