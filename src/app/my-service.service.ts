import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }
  getAllUsers(){
    return this.http.get('https://dummyjson.com/users');
  }
  getUser(id:string| null){
    return this.http.get(`https://dummyjson.com/users/${id}`)
  }
}
