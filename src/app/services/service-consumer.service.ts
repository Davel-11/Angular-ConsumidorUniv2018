import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})

export class ServiceConsumerService {
  
  constructor(public http: HttpClient ) { }

  url: string = 'http://150.168.30.30:9699/student/';
 
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    });

  
  getTodos(){
    return this.http.get<any>(this.url, {headers: this.headers} );
  }

  enviarDatos(post){
    return this.http.post<any>(this.url, JSON.stringify(post),  {headers: this.headers});    
  }

  actualizarDatos(datosEstudiante){
    //this.http.put(this.url, JSON.stringify(post) )
    return this.http.put<any>(this.url+''+datosEstudiante.id, JSON.stringify(datosEstudiante), {headers: this.headers});
}

  borrarDatos(Yid){
    return this.http.delete(this.url + ''+ Yid );
  }

  getOne(parametroId){
    return this.http.get<any>(this.url+parametroId);      
  }
    
}
