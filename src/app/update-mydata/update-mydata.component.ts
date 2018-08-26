import { Component, OnInit } from '@angular/core';
import { ServiceConsumerService } from '../services/service-consumer.service';

import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-update-mydata',
  templateUrl: './update-mydata.component.html',
  styleUrls: ['./update-mydata.component.css']
})
export class UpdateMydataComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private serviceAccess : ServiceConsumerService) { }

  public datosEstudiante:  any={};

  ngOnInit() {   
    let parametroId = this.route.snapshot.paramMap.get('parametroId'); 
    //console.log(parametroId);       

     this.serviceAccess.getOne(parametroId).subscribe(
      respuesta => {this.datosEstudiante = respuesta
        //console.log(this.datosEstudiante);
        //console.log(this.datosEstudiante.name);
      });         
  }

  post = {
    name: nombred.value,
    number: numerod.value
  }

  actualizarDatosComp(nombred, numerod){
      console.log(this.datosEstudiante.id);
      console.log(nombred.value);
      console.log(numerod.value);
     //this.serviceAccess.actualizarDatos(datosEstudiante);
  }
}
