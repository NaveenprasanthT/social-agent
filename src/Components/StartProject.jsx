import React from 'react'
import styles from '@/styles/StartProject.module.css'
import Image from 'next/image'
import img from '../../public/assets/heroImage.png'

const StartProject = () => {
  return (
    <div className={styles.startProjectWrap}>
      <div className={styles.left}>
        <h3>Get on-board with us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Image className={styles.image} src={img} alt='image' />
      </div>
      <div className={styles.right}>

      </div>
    </div>
  )
}

export default StartProject