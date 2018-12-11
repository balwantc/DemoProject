import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sourceBuilderTools = [
   
    { name: 'LoginFormComponent'},
    { name: 'FeedbackFormComponent'},
    { name: 'RssComponent'},
    { name: 'ProductDetailComponent'},
    { name: 'ChartComponent'},
    
  ];
  targetBuilderTools: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;

  builderDrag(e: any) {
    const item = e.value;
    item.data =
      item.inputType === 'number'
        ? (Math.random() * 100) | 0
        : Math.random()
          .toString(36)
          .substring(20);
  }

  log(e: any) {
    console.log(e.type, e);
  }

  canMove(e: any): boolean {
    return e.indexOf('Disabled') === -1;
  }

}