import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceConsumerService } from './services/service-consumer.service';
import { ConsumerMyAppComponent } from './consumer-my-app/consumer-my-app.component';
import { HttpClient } from 'selenium-webdriver/http';


@NgModule({
  declarations: [
    AppComponent,
    ConsumerMyAppComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClient  
  ],
  providers: [
    ServiceConsumerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
