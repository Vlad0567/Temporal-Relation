import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine
} from 'recharts';
import styles from './TimelineChart.module.css';


const TimelineChart = ({ data, observerPosition }) => {
  const chartData = data.map(item => ({
    name: item.id,
    duration: item.end - item.start,
    start: item.start,
    color: item.color
  }));

  return (
    <div className={styles.timelineChartContainer}> {/* Используем CSS Module */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 20, left: -30, right: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 60]} />
          <YAxis type="category" dataKey="name" reversed />
          <Tooltip />

          <ReferenceLine x={observerPosition} stroke="purple" strokeWidth={2} />

          <Bar dataKey="start" stackId="a" fill="transparent" />
          <Bar dataKey="duration" stackId="a">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className={styles.timelineLegend}>
        {chartData.map((item, index) => (
          <span key={index}>
            <span style={{ color: item.color, fontWeight: 'bold' }}>■</span> Событие {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TimelineChart;
