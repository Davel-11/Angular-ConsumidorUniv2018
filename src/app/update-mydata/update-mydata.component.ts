import { Component, OnInit } from '@angular/core';
import { ServiceConsumerService } from '../services/service-consumer.service';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { delay } from 'q';



@Component({
  selector: 'app-update-mydata',
  templateUrl: './update-mydata.component.html',
  styleUrls: ['./update-mydata.component.css']
})
export class UpdateMydataComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private serviceAccess : ServiceConsumerService)    
    { }
    
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

  

  actualizarDatosComp(nombred, numerod){

    let post = {
      "id": +this.datosEstudiante.id,
      "name": nombred.value,
      "number": numerod.value
    }
      console.log(post.id);
      console.log(post.name);
      console.log(post.number);
     this.serviceAccess.actualizarDatos(post).subscribe();

     //this.router.navigate(['/']);
          
    }
}
