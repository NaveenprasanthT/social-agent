import Image from 'next/image';
import React from 'react';
import Button from './Button';
import Meeting from "../../public/assets/meetingPic.png";
import styles from '@/styles/Home/Consultation.module.css';

function Consultation() {
    return ( 
        <div className={styles.consultationContainer}>
            <div className={styles.consultationLeft}>
                <Image src={Meeting} className={styles.consultationImage}/>
                <div>
                    <span>Let us be your <br/> Social Agent!</span>
                </div>
            </div>
            <div className={styles.consultationRight}>
                <div>
                <h1>Ready to start your project?</h1>
                <p>Lorem ipsum dolor sit amet consectetur. 
                    Morbi in mattis aliquam amet dui duis. 
                    Vulputate enim pellentesque odio eget. 
                    Vel facilisis libero metus morbi nec quis a mi non. 
                    Id porta lorem quis risus nunc aliquam mi donec nisl. 
                    Ultrices sed orci porttitor praesent. 
                    Leo velit aenean lorem maecenas turpis tempus volutpat. 
                    Diam risus et lorem tortor. Metus in lacus mauris massa mi. 
                    Tincidunt mauris porttitor ut turpis. 
                    Est metus molestie risus enim auctor nam.
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