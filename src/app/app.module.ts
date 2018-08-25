import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceConsumerService } from './services/service-consumer.service';
import { ConsumerMyAppComponent } from './consumer-my-app/consumer-my-app.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MypostComponent } from './mypost/mypost.component';

//import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsumerMyAppComponent,
    MypostComponent,
    NavigationbarComponent

  ],
  imports: [
    
    BrowserModule,
    HttpModule,
    HttpClientModule,    

    RouterModule.forRoot([
      { path : '', component: ConsumerMyAppComponent },
      { path : 'post', component: MypostComponent }
    ])   
    
  ],
  providers: [
    ServiceConsumerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
