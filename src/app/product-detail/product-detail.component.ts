import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private appService: AppService) { }
  showBody = false;
  productDetails;
  ngOnInit() {
  }
  getData() {
    this.showBody = !this.showBody;
    this.appService.getProductList().subscribe((res) => {
      console.log('res ', res);
      this.productDetails = res;
    });

  }
}
