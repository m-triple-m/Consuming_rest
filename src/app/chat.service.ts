import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket;
  serverUrl = 'http://localhost:3000';

  constructor() { 
    this.connectUser();
  }

  connectUser(){
    this.socket = io(this.serverUrl);
  }

}
