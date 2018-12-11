import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private appService: AppService) { }
  public chartDetails;
  public chartTypeList = [{ name: 'Bar', value: 'bar'}, { name: 'Radar',value:'radar' }, { name: 'Doughnut',value:'doughnut' }, { name: 'Pie',value:'pie' }]

  ngOnInit() {
    this.chartDetails = this.appService.getChartDetails();
  }


  clickedData(type) {
    console.log(777, type);
    this.chartDetails.chartType = type;

  }
}
