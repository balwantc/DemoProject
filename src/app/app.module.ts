import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDnDModule } from './dnd-package/ngx-dnd.module';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContainerComponent } from './container/container.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { RssComponent } from './rss/rss.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {  HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ContainerComponent,
    FeedbackFormComponent,
    ProductDetailComponent,
    RssComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    NgxDnDModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginFormComponent, FeedbackFormComponent,
     RssComponent, ProductDetailComponent,ChartComponent]
})
export class AppModule { }
