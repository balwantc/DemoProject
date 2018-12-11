import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css']
})
export class RssComponent implements OnInit {

  constructor(private appService: AppService) { }
  public feedResult;
  public loading=true;
  clicked=false;
  ngOnInit() {
    
  }
  getRssResult(){
    this.clicked=true;
    this.appService.getLatestNewsFeed().subscribe((res) => {
      console.log('res ', res);
      this.feedResult = res;
      this.loading=false;
      
    });
  }
 
}
