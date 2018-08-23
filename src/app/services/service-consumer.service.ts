import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceConsumerService {

  constructor() { }

  getAll(){
    return "Hola desde Servicio";
  }

  
}
