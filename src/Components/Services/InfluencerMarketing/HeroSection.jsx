import React from 'react'
import styles from '@/styles/InfluencerMarketing/HeroSection.module.css'
import Button from '@/Components/Button'

const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Influencer Marketing</h1>
            <p>Supercharge brand Visibility, Skyrocket Sales, and increase Website Traffic with our influencer marketing! We help you to enhance Credibility, Maximise ROI, and Unleash Strategic Brilliance for Unmatched Business Success!</p>
            <Button value='GET SOCIAL' color='var(--P700)' bg='#fff' padding='12px 35px'/>
            <div className={styles.MsgContainer1}>
                <img src='/assets/IM/IMHeader1.png'/>
                <div className={styles.MsgContainer1Content}>
                    <div className={styles.MsgContainer1Shape}></div>
                    <h6>1.3 Millon Views</h6>
                </div>
            </div>
            <div className={styles.MsgContainer2}>
                <div className={styles.MsgContainer2Content}>
                    <div className={styles.MsgContainer2Shape}></div>
                    <h6>HEY!!!</h6>
                </div>
                <img src='/assets/IM/IMHeader4.png'/>
            </div>
            <div className={styles.MsgContainer3}>
                <div className={styles.MsgContainer3Content}>
                    <div className={styles.MsgContainer3Shape}></div>
                    <h6>My Social Agent</h6>
                </div>
                <img src='/assets/IM/IMHeader2.png'/>
            </div>
            <div className={styles.MsgContainer4}>
                <img src='/assets/IM/IMHeader3.png'/>
                <div className={styles.MsgContainer4Content}>
                    <div className={styles.MsgContainer4Shape}></div>
                    <h6><span>57k</span> Followers</h6>
                </div>
        </div>
        </div>
    )
}

export default HeroSection