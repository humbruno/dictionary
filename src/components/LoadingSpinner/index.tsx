import React from 'react';
import styles from './styles.module.css';

function LoadingSpinner() {
  return (
    <div className={styles.spinnerBox}>
      <div className={styles.circleBorder}>
        <div className={styles.circleCore}></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
