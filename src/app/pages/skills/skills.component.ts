import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private colorIndex = 0;
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'right',
        color: '#000',
        font: {
          size: 12,
          weight: 'bold'
        },
        formatter: (value: any) => `${value}%`
      },
      title: {
        display: true,
        text: 'Technical Skills Overview',
        font: {
          size: 18
        }
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Proficiency (%)',
          font: {
            weight: 'bold'
          }
        }
      }
    }
  };

  public barChartLabels: string[] = [];
  public barChartType: 'bar' = 'bar';
  public barChartPlugins = [DataLabelsPlugin];
  public barChartData: ChartDataset<'bar'>[] = [
    {
      data: [],
      backgroundColor: [],
      borderRadius: 6,
      label: 'Proficiency (%)'
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/json/skills.json').subscribe(data => {
      this.barChartLabels = data.map(skill => skill.name);
      this.barChartData[0].data = data.map(skill => skill.level);
      this.barChartData[0].backgroundColor = data.map(() => this.getRandomColor());
    });
  }

  getRandomColor(): string {
    const professionalLightColors = [
  '#BBDEFB', // Light Blue
  '#C8E6C9', // Light Green
  '#FFE0B2', // Light Orange
  '#E1BEE7', // Light Purple
  '#B2EBF2', // Light Teal
  '#F8BBD0', // Light Pink
  '#D1C4E9', // Light Indigo
  '#D7CCC8'  // Light Brown/Grey
    ];
    const color = professionalLightColors[this.colorIndex % professionalLightColors.length];
  this.colorIndex++;
  return color;
  }
}
