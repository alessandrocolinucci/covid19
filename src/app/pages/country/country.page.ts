import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryStatus } from 'src/app/commons/models/country-status';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {

  @ViewChild("lineChart", { static: true }) lineChart: ElementRef;
  countryStatus: CountryStatus;

  bars: any;
  colorArray: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.data["countryStatus"]);
    this.countryStatus = this.route.snapshot.data.countryStatus;
    this.createLineChart();
  }

  createLineChart() {
    if (this.lineChart) {
      this.lineChart = new Chart(this.lineChart.nativeElement, {
        type: "line",
        data: {
          labels: this.countryStatus.timeline
            .sort((a, b) => a.updatedAt.getTime() - b.updatedAt.getTime())
            .map(t => t.updatedAt.getDate() + '/' + (t.updatedAt.getMonth() + 1)),
          datasets: [
            {
              fill: true,
              lineTension: 1,
              backgroundColor: "rgba(249,113,113,.2)",
              borderWidth: 5,
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDashOffset: 0.0,
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(249, 113, 113, .8)",
              pointHoverBorderColor: "#8a6b85",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 12,
              data: this.countryStatus.timeline.map(t => t.confirmed),
              spanGaps: false
            }
          ],
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
                gridLines: {
                  color: "rgba(0, 0, 0, 0.05)",
                }
            }],
            yAxes: [{
                gridLines: {
                  color: "rgba(0, 0, 0, 0.05)",
                }   
            }]
          }
        }
      });
    }
  }

  get populationInfectedRatio(): string {
    return this.countryStatus ? ((this.countryStatus.confirmed / this.countryStatus.country.population) * 100).toFixed(2) : '';
  }

}
