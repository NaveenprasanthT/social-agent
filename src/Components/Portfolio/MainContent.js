import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import styles from '@/styles/Portfolio/MainContent.module.css';

const MainContent = () => {

    const data = [
        {
            key: 1,
            title:"Icon Homz",
            tags:"WEBSITE | PRODUCT ",
            image:'/assets/portfolio/portfolio3.png',
            desc:"Lorem ipsum dolor sit amet consectetur. Non adipiscing cursus non sed placerat tempor sed dolor eget. Rhoncus"
        },
        {
            key: 2,
            title:"Vriksh Fertility",
            tags:"BRANDING  |  PRODUCT  |  GRAPHIC DESIGN",
            image:'/assets/portfolio/portfolio2.png',
            desc:"Lorem ipsum dolor sit amet consectetur. Non adipiscing cursus non sed placerat tempor sed dolor eget. Rhoncus"
        },
        {
            key: 3,
            title:"Ramya Katta",
            tags:"BRANDING  |  PRODUCT  |  GRAPHIC DESIGN ",
            image:'/assets/portfolio/portfolio1.png',
            desc:"Lorem ipsum dolor sit amet consectetur. Non adipiscing cursus non sed placerat tempor sed dolor eget. Rhoncus"
        },
        {
            key: 4,
            title:"Veda Earth",
            tags:"BRANDING  |  PRODUCT  |  GRAPHIC DESIGN ",
            image:'/assets/portfolio/portfolio4.png',
            desc:"Lorem ipsum dolor sit amet consectetur. Non adipiscing cursus non sed placerat tempor sed dolor eget. Rhoncus"
        },
        {
            key: 5,
            title:"Turbo Car care",
            tags:"BRANDING  |  PRODUCT  |  GRAPHIC DESIGN ",
            image:'/assets/portfolio/portfolio5.png',
            desc:"Lorem ipsum dolor sit amet consectetur. Non adipiscing cursus non sed placerat tempor sed dolor eget. Rhoncus"
        },
        {
            key: 6,
            title:"Veda Earth",
            tags:"BRANDING  |  PRODUCT  |  GRAPHIC DESIGN ",
            image:'/assets/portfolio/portfolio6.png',
            desc:"Lorem ipsum dolor sit amet consectetur. Non adipiscing cursus non sed placerat tempor sed dolor eget. Rhoncus"
        },
    ]

    return(
        <div className={styles.MainContainer}>
            {data.map((item) => (
                <div className={styles.MainContainerItem}>
                    <Image src={item.image} alt='' width={300} height={300} className={styles.MainContainerImage}/>
                    <div>
                        <h2>{item.title}</h2>
                        <span>{item.tags}</span>
                    </div>
                    <p>{item.desc}</p>
                    <Button 
                        bg='#354673' 
                        color='#fff' 
                        value="View case Study" 
                        fontSize="14px"
                        borderRadius='5px'
                    />            
                </div>
            ))}
        </div>
    );
}

export default MainContent;