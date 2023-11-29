import React from 'react';
import '../style/Donut.css';

import Chart from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
      'Loisir',
      'Nourriture',
      'Assurance'
    ],
    datasets: [{
      data: [
            300,
            50,
            100
        ],
      backgroundColor: [
        'rgb(173, 216, 230)',
        'rgb(70, 130, 180)',
        'rgb(0, 0, 128)'
      ],
      hoverOffset: 5
    }]
  };

function Contents() {
    return (
        <div className="contentDonut">
            <div className="donuts">
                <Doughnut data={data} />
            </div>
        </div>
    );
}

export default Contents;

