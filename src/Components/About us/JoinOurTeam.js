import styles from '@/styles/AboutUs/AboutUs.module.css';
import React from 'react';
import Button from '../Button';

const OurTeam = () => {
    return (
        <div className={styles.OurTeamContainer}>
            <div className={styles.OurTeamContent}>
                <h4>Join Our Team</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Faucibus cum vitae ipsum sodales amet. Facilisis a faucibus tristique augue. Sed ut integer nisl ornare sit arcu est quis. </p>
                <Button
                    value="DISCOVER CAREER"
                    color="#ffffff"
                    bg='var(--P700)'
                    className={styles.OurTeamkButton}
                    padding='12px 50px'
                    fontSize='13px'
                    fontWeight='600'
                />
            </div>
            <img src='/assets/tag.png' alt=''/>
        </div>
    )
}

export default OurTeam;