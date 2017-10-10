import { Component, OnInit } from '@angular/core';
import { RESTService } from '../../service/rest.service';
import { Chart } from 'chart.js/dist/Chart.js';

@Component({
  selector: 'app-number-of-tester-each-exam-center-bar-chart',
  templateUrl: './number-of-tester-each-exam-center-bar-chart.component.html',
  styleUrls: ['./number-of-tester-each-exam-center-bar-chart.component.css']
})
export class NumberOfTesterEachExamCenterBarChartComponent implements OnInit {

  constructor(private _rest: RESTService) { }

  ngOnInit() {
    var canvas : any = document.getElementById("myChart");
    var ctx = canvas.getContext("2d");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: ['# of Votes', 'abc'],
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        animation: {
          duration: 5000
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    console.log(myChart);
  }

}
