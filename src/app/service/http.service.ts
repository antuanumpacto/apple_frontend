import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = environment.url
  constructor(
    private http: HttpClient
  ) { }

  //funcion sincronica y asincronica

  apiPostRequest(action: string, data: any = {}): Promise<any> {
    return new Promise<any>(resolve => {
      this.http.post(this.url + action, data).subscribe(
        response => resolve(response),
        error => resolve(error)
      )
    })
  }
}
