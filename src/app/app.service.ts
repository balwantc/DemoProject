import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  public chartDetails = {
    chartOptions: {
      scaleShowVerticalLines: false,
      responsive: true
    },
    chartLabels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    chartType: 'bar',
    chartLegend: false,

    chartData: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ]
  }

  getProductList() {
    var productList = this.http.get("http://localhost:3000/arrayOfProducts");
    console.log(9809, productList);
    return productList;

  }
  getLatestNewsFeed() {
    let date = new Date().toISOString().split('T')[0];
    let key = "fc73e75a29ce48e58835ca3dcefa4061"
    var result = this.http.get(`https://newsapi.org/v2/everything?q=bitcoin&from=${date}&sortBy=publishedAt&apiKey=${key}`);
    console.log(80909, result);
    return result;
  }
  getChartDetails() {
    return this.chartDetails;
  }
}
