import React from 'react';
import styles from '@/styles/Error.module.css'
import Link from 'next/link';

const ErrorPage = () => {
    return(
        <div className={styles.ErrContainer}>
            <h1>Whoops!</h1>
            <p>We have a problem. Our spaceship lost connection with Earth. Please stand by while we reconnect the dots.</p>
            <Link href='/'>
                <button className={styles.ErrButton}>HOME</button>
            </Link>
        </div>
    )
}

export default ErrorPage;