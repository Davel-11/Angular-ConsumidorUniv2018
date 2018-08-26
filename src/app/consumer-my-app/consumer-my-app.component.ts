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
  

  public misDatos : any = [];
    
  ngOnInit() {
    //this.variable = this.serviceAccess.getAll();
    this.serviceAccess.getTodos()
    .subscribe( resultados => {
       this.misDatos = resultados;
       //console.log(JSON.stringify(resultados));
    });   
  }

  borrarDatosComp(post){    
    this.serviceAccess.borrarDatos(post.id).subscribe( );
      location.reload();    
  }

  actualizarDatosComp(post){
    this.serviceAccess.actualizarDatos(post.id).subscribe();
  }

}
