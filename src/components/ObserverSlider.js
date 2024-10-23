import React from 'react';
import styles from './ObserverSlider.module.css';

const ObserverSlider = ({ observerPosition, handleObserverChange }) => {
  return (
    <div className={styles.sliderContainer}>
      <input
        type="range"
        min="0"
        max="60"
        value={observerPosition}
        onChange={handleObserverChange}
        className={styles.customSlider} 
      />
      <p className={styles.observerPosition}>
        Позиция наблюдателя: {observerPosition}
      </p>
    </div>
  );
};

export default ObserverSlider;
