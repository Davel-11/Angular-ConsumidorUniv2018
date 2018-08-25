import { Component, OnInit } from '@angular/core';
import { ServiceConsumerService } from '../services/service-consumer.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {

  constructor(private servicio: ServiceConsumerService) { }

  ngOnInit() {
  }

  enviarDatosComp(nombred, numerod){      
    //console.log(nombred.value);
    //console.log(numerod.value);
    let post = {
      name: nombred.value,
      number: numerod.value
    }
   this.servicio.enviarDatos(post).subscribe();
  }

}
