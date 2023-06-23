import Image from 'next/image';
import React from 'react';
import Button from './Button';
import Meeting from "../../public/assets/meetingPic.png";
import styles from '@/styles/Home/Consultation.module.css';

function Consultation() {
    return ( 
        <div className={styles.consultationContainer}>
            <div className={styles.consultationLeft}>
            <h2>Ready to <span>start your project?</span></h2>
                <Image src={Meeting} className={styles.consultationImage}/>
                <div>
                    <span>Let us be your <br/> Social Agent!</span>
                </div>
            </div>
            <div className={styles.consultationRight}>
                <div>
                <h1>Ready to start your project?</h1>
                <p>Having a good Digital strategic partner is like having a megaphone in a crowded stadium – it helps you reach a massive audience! With digital marketing, you can aim your messages directly at the right people, like a laser-guided missile, boosting your chances of winning them over. So, buckle up and embrace digital marketing to make your brand shine in the digital universe!
                </p>
                </div>
                <Button 
                    bg='var(--P700)' 
                    color='#fff' 
                    value="BOOK FREE CONSULTATION" 
                    fontSize="14px"
                />
            </div>
        </div>
     );
}

export default Consultation;