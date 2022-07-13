import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint)}
    </div>
  )
}

export default Chart

//rafc creat a const function
