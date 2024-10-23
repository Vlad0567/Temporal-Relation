import React from 'react';
import styles from './TypesInfo.module.css'; // Импортируем стили как модуль

const TypesInfo = () => {
    return (
        <div className={styles['types-info-container']}> {/* Применяем стили через объект */}
            <h2 className={styles['types-title']}>Типы отношений:</h2>
            <ul className={styles['types-list']}>
                <li><strong>(rts)</strong> — последовательно с паузой;</li>
                <li><strong>(rtsn)</strong> — последовательно без паузы;</li>
                <li><strong>(rtes)</strong> — пересекаются;</li>
                <li><strong>(rtel)</strong> — вложенные с примыканием к началу;</li>
                <li><strong>(rter)</strong> — вложенные с примыканием к окончанию;</li>
                <li><strong>(rte)</strong> — вложенные без примыканий;</li>
                <li><strong>(rtU)</strong> — отношение несравнимости темпоров.</li>
            </ul>
        </div>
    );
};

export default TypesInfo;
