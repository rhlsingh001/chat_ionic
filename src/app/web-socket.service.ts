import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  //socket: any;
  readonly url: string = 'ws://localhost:3002';
  
  private Socket;

  constructor() {
    this.Socket = io(this.url);  
   }

  public sendMessage(message) { 
    this.Socket.emit('new-message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
        this.Socket.on('new-message', (message) => {
            observer.next(message);
        });
    });
}

  // listen(eventName: string){
  //   return new Observable((subscriber)=>{
  //     this.socket.on(eventName,(data)=>{
  //       subscriber.next(data);
  //     })
  //   })
  // }

  // exit(eventName:string,data:any){
  //   this.socket.emit(eventName,data);
  // }
    

}
