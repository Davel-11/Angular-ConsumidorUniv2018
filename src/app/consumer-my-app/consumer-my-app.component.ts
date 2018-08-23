import { Component, OnInit } from '@angular/core';
import { ServiceConsumerService } from '../services/service-consumer.service'

@Component({
  selector: 'consumer-my-app',
  templateUrl: './consumer-my-app.component.html',
  styleUrls: ['./consumer-my-app.component.css']
})
export class ConsumerMyAppComponent implements OnInit {


  constructor( private serviceAccess : ServiceConsumerService ) { }

  private variable;

  ngOnInit() {
    this.variable = this.serviceAccess.getAll();
  }

}
