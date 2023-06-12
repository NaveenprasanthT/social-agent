import React from 'react'
import styles from '@/styles/AboutUs/AboutUs.module.css'
import Image from 'next/image'
import teamPic from '../../../public/assets/teamPic.webp'

const HeroSection = () => {
  return (
    <>
      <div className={styles.HeroSectionWrap}>
        <h1>"Driving <span className={styles.highlight}>digital success</span> through innovative marketing solutions."</h1>
      </div>
      <div className={styles.teamWrap}>
        <Image className={styles.img} src={teamPic} alt='team' />
        <div className={styles.knowUs}>Know Us</div>
        <p>Lorem ipsum dolor sit amet consectetur. Vitae pellentesque donec varius vitae at. Semper sit eget gravida varius. Facilisis amet mollis aliquet turpis integer id mauris. Convallis id pellentesque cursus dictum viverra tempor. Pulvinar sit ornare nulla id malesuada vitae.
          Aliquam nam non sed pellentesque at. Pulvinar donec faucibus quis ultricies dolor nisl. Sit pulvinar habitant eleifend nibh vitae. Malesuada est morbi feugiat sapien donec nisl eros urna aliquet. Consequat pellentesque auctor massa lorem egestas cras amet molestie vel. Amet vitae et vel fusce posuere. Felis feugiat tellus purus scelerisque at. Orci purus morbi cursus erat leo. Vulputate semper tincidunt aenean ut morbi non adipiscing sed viverra. Ipsum nisl auctor dui egestas pharetra ut. </p>
      </div>
    </>
  )
}

export default HeroSection