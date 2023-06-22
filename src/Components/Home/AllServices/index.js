import React from 'react';
import styles from '@/styles/Home/AllService.module.css'
import ServicesCarousel from './ServicesCarousel';
import Link from 'next/link';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: '/assets/SMM/SMMImg1.png',
    caption: 'Slide 1'
  },
  {
    url: '/assets/SMM/SMMImg2.png',
    caption: 'Slide 2'
  },
  {
    url: '/assets/SMM/SMMImg3.png',
    caption: 'Slide 3'
  },
];

function AllServices() {
    return ( 
        <div className={styles.AllServiceContainer}>
            <div className={styles.ServiceText}>
                <h1>Excellence Delivered Through <br/> <span>Quality Service.</span></h1>
                <div className={styles.slideContainer}>
                <Fade autoplay={true} arrows={false} transitionDuration={1000} duration={2000}>
                {fadeImages.map((fadeImage, index) => (
                  <div key={index}>
                    <img style={{ width: '100%' }} src={fadeImage.url} />
                  </div>
                ))}
              </Fade>
                </div>
                <p>Unleash your digital potential with our exceptional service and drive remarkable results.</p>
                <Link href='/Services' style={{width:'100%',display:'flex',justifyContent:'center',textDecoration:'none'}}>
                    <button className={styles.ServiceTextButton}>EXPLORE ALL SERVICES</button>
                </Link>
            </div>
            <ServicesCarousel/>
        </div>
    );
}


export default AllServices;