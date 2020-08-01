import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  url="http://localhost:3000/contact"
  constructor(private http: HttpClient) { }

  addContact(data){
    return this.http.post(this.url+'/add', data);
  }

  fetchQueries(){
    return this.http.get(this.url+'/getallcontact');
  }

}
