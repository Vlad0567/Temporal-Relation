import './App.css';
import React, { useState } from 'react';
import initialData from './data';
import Limits from './components/Limits';
import TimelineChart from './components/TimelineChart'
import TypesInfo from './components/TypesInfo'
import TempTable from './components/TempTable';
import ObserverSlider from './components/ObserverSlider'


function App() {
  const [data, setData] = useState(initialData);
  const [observerPosition, setObserverPosition] = useState(30); // Начальная позиция наблюдателя


  const handleLimitsChange = (id, newStart, newEnd) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, start: newStart, end: newEnd } : item
      )
    );
  };

  const handleObserverChange = (e) => {
    setObserverPosition(parseInt(e.target.value, 10)); // Изменяем позицию наблюдателя
  };


  const tableData = data.map(({ color, ...rest }) => rest);

  return (
    <div className="App">
      
      {/* Поля для ввода границ */}
      <div className="limits-wrapper">
        {data.map((item) => (
          <Limits key={item.id} {...item} onLimitsChange={handleLimitsChange} observerPosition={observerPosition}/>
        ))}
      </div>

      {/* Вывод графика*/}
      <TimelineChart data={data} observerPosition={observerPosition}/>

      {/* Ползунок для изменения положения наблюдателя */}
      <ObserverSlider
        observerPosition={observerPosition}
        handleObserverChange={handleObserverChange}
      />

      {/* Вывод типов отношений*/}
      <TypesInfo />
      {/* Вывод таблицы */}
      <TempTable data={tableData}/>
    </div>
  );
}



export default App;
