import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import './chart-register';
import { faBarChart, faLineChart, faPieChart, faChartGantt } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, FaIconComponent],
  templateUrl: './graphs.html',
  styleUrls: ['./graphs.css']
})
export class Graph {
  @Input() type: ChartType = 'bar';
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() title: string = 'Data Overview';

  public chartData!: ChartConfiguration['data'];
  public chartOptions!: ChartConfiguration['options'];

  faLineChart = faLineChart;
  faBarChart = faBarChart;
  faPieChart = faPieChart;
  faChartGantt = faChartGantt;

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    this.chartData = {
      labels: this.labels,
      datasets: [
        {
          label: this.title,
          data: this.data,
          backgroundColor: [
            'rgba(37, 99, 235, 0.6)',
            'rgba(219, 39, 119, 0.6)',
            'rgba(34, 197, 94, 0.6)',
            'rgba(250, 204, 21, 0.6)',
            'rgba(147, 51, 234, 0.6)'
          ],
          borderColor: 'rgba(37, 99, 235, 1)',
          borderWidth: 2,
          borderRadius: 10,
          pointBackgroundColor: '#2563eb',
          tension: 0.3
        },
      ],
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#1e3a8a',
            font: { size: 14 }
          },
        },
        title: {
          display: true,
          text: this.title,
          color: '#1e3a8a',
          font: { size: 18, weight: 'bold' }
        }
      },
      scales: {
        x: {
          ticks: { color: '#1e3a8a' },
          grid: { color: 'rgba(96,165,250,0.15)' }
        },
        y: {
          ticks: { color: '#1e3a8a' },
          grid: { color: 'rgba(96,165,250,0.15)' }
        }
      }
    };
  }

  setChartType(newType: ChartType) {
    this.type = newType;
    this.chart?.update(); 
  }
}
