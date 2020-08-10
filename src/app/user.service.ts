import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  url = "http://localhost:3000/user/";

  constructor(private http: HttpClient) { }

  addUser(data){
    // this will return an observable object
    return this.http.post(this.url+'add', data);
  }

  getUserByUsername(username){
    return this.http.get(this.url+'getbyusername/'+username);
  }

  getAllUser(){
    return this.http.get(this.url+'getalluser');
  }

  deleteUser(userid){
    return this.http.delete(this.url+'delete/'+userid);
  }

  updateUser(userid, data){
    return this.http.put(this.url+'update/'+userid, data);
  }

}


