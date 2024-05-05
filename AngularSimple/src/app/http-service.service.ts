import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient,private rouet:ActivatedRoute) { }

  get(endpoint: any, callback: any) {

    return this.http.get(endpoint).subscribe(data => {
      callback(data);
    });

  }
  post(endpoint: any, bean: any, callback: any) {

    return this.http.post(endpoint, bean).subscribe(data => {
      callback(data);
    });

  }

getPathVariable(route: ActivatedRoute, callback: any) {
  route.params.subscribe(params => {
    callback(params)
  });
}
}
