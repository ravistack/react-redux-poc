import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import './DashboardChart.scss';
class DashboardChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : {
        labels: [
          'Linkage Check',
          'Conformity Check',
          'Business Validation',
          '14M Domain Validation Check',
          '14M Field Type Check'
        ],
        datasets: [{
          data: [215, 130, 365, 589, 75],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#15ea6a'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#15ea6a'
          ]
        }]
      }
    }
  }
  render() {
    const data = this.state.data;
    return (
      <div className="DashboardChart1">
        <Doughnut
          data={data}
          width={300}
          height={300}
          options={{
            maintainAspectRatio: false
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
