import React from "react";
import styles from './Limits.module.css';  // Импортируем стили из модуля

const Limits = ({ id, start, end, onLimitsChange, observerPosition }) => {
  const [startValue, setStart] = React.useState(start);
  const [endValue, setEnd] = React.useState(end);

  const handleStartChange = (e) => {
    const newStart = parseInt(e.target.value, 10);
    setStart(newStart);
    onLimitsChange(id, newStart, endValue);
  };

  const handleEndChange = (e) => {
    const newEnd = parseInt(e.target.value, 10);
    setEnd(newEnd);
    onLimitsChange(id, startValue, newEnd);
  };

  const getEventStatus = () => {
    if (observerPosition < startValue) {
      return 'произойдет';
    } else if (observerPosition >= startValue && observerPosition <= endValue) {
      return 'происходит';
    } else {
      return 'свершилось';
    }
  };

  return (
    <div className={styles.limitsContainer}>
      <h2>Событие {id}</h2>
      <div className={styles.limitsInputs}>
        <input type="number" value={startValue} onChange={handleStartChange} />
        <input type="number" value={endValue} onChange={handleEndChange} />
      </div>
      <span className={styles.eventStatus}>{getEventStatus()}</span>
    </div>
  );
};

export default Limits;
