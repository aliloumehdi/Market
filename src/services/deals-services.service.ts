import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API=environment.API+'deals'
@Injectable({
  providedIn: 'root'
})
export class DealsServicesService {

  constructor(private httpClient:HttpClient) { }
  getDeals():Observable<any>{
    return this.httpClient.get(API)
  }
  getImage(img):Observable<any>{
    return this.httpClient.get(environment.API+'public/images/'+img+'.jpg')
  }
}
