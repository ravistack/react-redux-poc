import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import './DashboardChart.scss';
class DashboardChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : {
        labels: [
          'Exceptions'
        ],
        datasets: [
          {
            data: [215],
            label: 'LINKAGE',
            stack: 'stack0',
            backgroundColor: '#FF6384',
            hoverBackgroundColor: '#FF6384'
          },
          {
            data: [130],
            label: 'CONFORMITY',
            stack: 'stack0',
            backgroundColor:'#36A2EB',
            hoverBackgroundColor:'#36A2EB'
          },
          {
            data: [365],
            label: 'BUSINESS VALIDATION',
            stack: 'stack0',
            backgroundColor: '#FFCE56',
            hoverBackgroundColor: '#FFCE56'
          },
          {
            data: [589],
            label: 'TECHNICAL VALIDATION',
            stack: 'stack0',
            backgroundColor: '#15ea6a',
            hoverBackgroundColor: '#15ea6a'
          }
        ]
      }
    }
  }
  render() {
    const data = this.state.data;
    return (
      <div className="DashboardChart">
        <HorizontalBar
          data={data}
          width={300}
          height={300}
          options={{
            maintainAspectRatio: false,
            reponsive: true,
            scales: {
              xAxes: [{
                stacked: true,
                display: false,
                ticks: {
                  max: 1299
                }
              }],
              yAxes: [{
                stacked: true,
                display: false,
                barPercentage: 0.5
              }],
              gridLines:{
                display: false
              }
            }
          }}
          legend={{
            "display": true,
            "position": "bottom",
            "fullWidth": true,
            "reverse": false,
          }}
        />
      </div>
    );
  }
}

export default DashboardChart;
