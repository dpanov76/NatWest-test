import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private headers:any = {
  //   'Content-type': 'application/json; charset=utf-8',
  //   'Access-Control-Allow-Origin':'*',
  //   'Access-Control-Allow-Credentials':'true',
  //   'Access-Control-Allow-Methods': 'GET,POST',
  //   'Connection': 'keep-alive'
  // };
  // private header = new HttpHeaders(this.headers);

  constructor(private http: HttpClient) { }

  getData(API_URL:string, options: any): Observable<any> {
    const params = new HttpParams({fromObject: { ...{ appid:environment.apiKey }, ...options}});
    return this.http.get(`${API_URL}`, { params: params });
  }
}
