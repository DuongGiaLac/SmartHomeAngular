import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  public temp_chart = {
    id: 'temperature',
    lineChartData: [
      { data: [], label: 'Temperature' },
    ],
    lineChartLabels: ['11:30', '11:45', '12:00', '12:15', '12:30', '12:45', '13:00'],
    lineChartOptions: {
      responsive: true,
      title: {
        display: true,
        text: 'Temperature',
        fontSize: 20,
        fontColor: 'red',
      },
      legend: {
        display: false
      }
    },
    lineChartColors: [{
      backgroundColor: 'rgba(255, 31, 31, 0.2)',
      borderColor: 'rgba(255, 31, 31, 1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }],
    lineChartType: 'line',
  }

  public humi_chart = {
    id: 'humidity',
    lineChartData: [
      { data: [], label: 'Humidity' },
    ],
    lineChartLabels: ['11:30', '11:45', '12:00', '12:15', '12:30', '12:45', '13:00'],
    lineChartOptions: {
      responsive: true,
      layout: {
        padding: {
          top: 20,
        }
      },
      title: {
        display: true,
        text: 'Humidity',
        fontSize: 20,
        fontColor: 'rgba(0, 4, 245, 0.7)',
      },
      legend: {
        display: false
      }
    },
    lineChartColors: [{
      backgroundColor: 'rgba(0, 4, 245, 0.2)',
      borderColor: 'rgba(0, 4, 245, 1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }],
    lineChartType: 'line',
  }

  public charts = [this.temp_chart, this.humi_chart];

  ngOnInit() {

  }

}
