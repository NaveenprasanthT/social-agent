import React, { useState } from 'react';
import styles from '@/styles/StartProject.module.css';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/assets/heroImage.png';

const StartProject = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleNext = () => {
    // if (selectedCategories.length > 0) {
    //   router.push('/Start-A-ProjectInfo'); 
    // }
  };

  return (
    <div>
      <div className={styles.startProjectWrap}>
        <div className={styles.left}>
        <div>
            <h3>Get on-board with us</h3>
        <p>Join our team as we embark on an incredible adventure together</p>
        </div>
          <Image className={styles.image} src={img} alt="image" />
        </div>
        <div className={styles.right}>
          <div className={styles.flexButtons}>
            <h2 className={styles.heading}>Services</h2>
            <div className={styles.buttons}>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Social Media Marketing') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Social Media Marketing')}
              >
                Social Media Marketing
              </button>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Influencer Marketing') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Influencer Marketing')}
              >
                Influencer Marketing
              </button>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Customer Relation Management') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Customer Relation Management')}
              >
                Customer Relation Management
              </button>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Search Engine Optimisation and Marketing') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Search Engine Optimisation and Marketing')}
              >
                Search Engine Optimisation and Marketing
              </button>
            </div>
            <div className={styles.buttons}>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Digital Strategy and Consulting') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Digital Strategy and Consulting')}
              >
                Digital Strategy and Consulting
              </button>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('SMS Marketing') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('SMS Marketing')}
              >
                SMS Marketing
              </button>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('UI/UX Designing') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('UI/UX Designing')}
              >
                UI/UX Designing
              </button>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Video Marketing') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Video Marketing')}
              >
                Video Marketing
              </button>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Online Reputation Management') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Online Reputation Management')}
              >
                Online Reputation Management
              </button>
            </div>
            <div className={styles.buttons}>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Branding and Print Solutions') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Branding and Print Solutions')}
              >
                Branding and Print Solutions
              </button>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Email Marketing') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Email Marketing')}
              >
                Email Marketing
              </button>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Content and Creative') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Content and Creative')}
              >
                Content and Creative
              </button>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Analytics and Reports') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Analytics and Reports')}
              >
                Analytics and Reports
              </button>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Website Development') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Website Development')}
              >
                Website Development
              </button>
            </div>
            <div className={styles.buttons}>
              <button
                className={`${styles.categoryButton} ${selectedCategories.includes('Performance Marketing') ? styles.selectedButton : ''}`}
                onClick={() => handleCategorySelect('Performance Marketing')}
              >
                Performance Marketing
              </button>
            </div>
          </div>
          <div className={styles.flexButtons}>
          <div className={styles.nextButtonWrap}>
              {selectedCategories.length > 0 ? (
                <Link href="/Start-A-ProjectInfo" legacyBehavior >
                  <a className={styles.nextButton} style={{textDecoration:'none'}}>Next</a>
                </Link>
              ) : (
                <button className={styles.nextButton} disabled>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
