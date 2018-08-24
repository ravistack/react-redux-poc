import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import './DashboardChart.scss';
class DashboardChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : {
        labels: [
          'Red',
          'Green',
          'Yellow'
        ],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ]
        }]
      }
    }
  }
  render() {
    const data = this.state.data;
    return (
      <div className="DashboardChart">
        <Doughnut 
          data={data} 
          width={300}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default DashboardChart;