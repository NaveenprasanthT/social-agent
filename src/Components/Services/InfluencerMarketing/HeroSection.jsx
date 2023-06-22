import React from 'react'
import styles from '@/styles/InfluencerMarketing/HeroSection.module.css'
import Button from '@/Components/Button'

const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Influencer Marketing</h1>
            <div className={styles.ImageContainer}>
                <img src='/assets/IM/IMHeader1.png' className={styles.Image1Phne}/>
                <img src='/assets/IM/IMHeader4.png' className={styles.Image2Phne}/>
                <img src='/assets/IM/IMHeader2.png' className={styles.Image3Phne}/>
                <img src='/assets/IM/IMHeader3.png' className={styles.Image4Phne}/>
            </div>
            <p>Supercharge brand Visibility, Skyrocket Sales, and increase Website Traffic with our influencer marketing! We help you to enhance Credibility, Maximise ROI, and Unleash Strategic Brilliance for Unmatched Business Success!</p>
            <Button value='GET SOCIAL' color='var(--P700)' bg='#fff' padding='12px 35px'/>
            <div className={styles.MsgContainer1}>
                <img src='/assets/IM/IMHeader1.png'/>
            </div>
            <div className={styles.MsgContainer2}>
                <img src='/assets/IM/IMHeader4.png'/>
            </div>
            <div className={styles.MsgContainer3}>
                <img src='/assets/IM/IMHeader2.png'/>
            </div>
            <div className={styles.MsgContainer4}>
                <img src='/assets/IM/IMHeader3.png'/>
        </div>
        </div>
    )
}

export default HeroSection