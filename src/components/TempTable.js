import React from 'react';
import styles from './TempTable.module.css';

const getTemporalRelation = (eventA, eventB) => {
  const { start: startA, end: endA } = eventA;
  const { start: startB, end: endB } = eventB;

  if (startA === startB && endA < endB) return 'rtel'; // вложенные с примыканием к началу
  if (endA === endB && startA > startB) return 'rter'; // вложенные с примыканием к окончанию
  if (startA < endB && endA > startB) return 'rtes'; // пересекаются
  if (endA <= startB) return endA === startB ? 'rtsn' : 'rts'; // последовательные с паузой или без
  if (startA >= endB) return endB === startA ? 'rtsn' : 'rts'; // последовательные
  return 'rtU'; // несравнимые темпоры
};

const TempTable = ({ data }) => {
  const relations = data.map((eventA, rowIndex) =>
    data.map((eventB, colIndex) => {
      if (rowIndex === colIndex) return '';
      if (rowIndex > colIndex) return getTemporalRelation(eventA, eventB);
      return null;
    })
  );

  return (
    <div className={styles.tableContainer}>
      <h3>Темпоральные отношения:</h3>
      <table className={styles.tempTable}>
        <thead>
          <tr>
            <th></th>
            {data.map((event, index) => (
              <th key={index}>Событие {event.id}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {relations.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th>Событие {data[rowIndex].id}</th>
              {row.map((relation, colIndex) => (
                <td key={colIndex}>
                  {relation !== null
                    ? relation
                    : relations[colIndex][rowIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TempTable;
