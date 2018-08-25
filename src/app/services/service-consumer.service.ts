import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceConsumerService {
  
  constructor(private http: HttpClient ) { }

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

  actualizarDatos(datos){
    //this.http.put(this.url, JSON.stringify(post) )
return this.http.patch(this.url+ '/'+datos.id, JSON.stringify({ isRead: true }) );
}

  borrarDatos(Yid){
    return this.http.delete(this.url + '/'+ Yid  );
  }
  
}
