/**
 * Chatter - Chat themes Ionic 4 (https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { WebSocketService } from '../web-socket.service';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-fluid',
  templateUrl: './fluid.page.html',
  styleUrls: ['./fluid.page.scss'],
})
export class FluidPage implements OnInit {

  conversation = [
    { text: 'Hey, that\'s an awesome chat UI', sender: 0, image: 'assets/images/sg2.jpg' },
    { text: 'Right, it totally blew my mind', sender: 1, image: 'assets/images/sg1.jpg', read: true, delivered: true, sent: true },
    { text: 'And it is free ?', sender: 0, image: 'assets/images/sg2.jpg' },
    { text: 'Yes, totally free', sender: 1, image: 'assets/images/sg1.jpg', read: true, delivered: true, sent: true },
    { text: 'Wow, that\'s so cool', sender: 0, image: 'assets/images/sg2.jpg' },
    { text: 'Hats off to the developers', sender: 1, image: 'assets/images/sg1.jpg', read: false, delivered: true, sent: true },
    { text: 'Oh yes, this is gooood stuff', sender: 0, image: 'assets/images/sg2.jpg' },
    { text: 'Check out their other designs ', sender: 1, image: 'assets/images/sg1.jpg', read: false, delivered: false, sent: true }

  ]
  phone_model = 'iPhone';
  input = '';
  readonly url: string = 'ws://localhost:3002';
  socket: any;

  constructor(private platform: Platform,
    private webSocketService: WebSocketService,
    
    public alertController: AlertController, private device: Device, private menuCtrl: MenuController) { 

      this.socket = io(this.url);
    }



  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');

    setTimeout(() => {
      this.scrollToBottom()
    }, 10)
    setTimeout(() => {
      this.presentAlert();
    }, 100)

    
  }

  async presentAlert() {
    if (this.device.platform = 'iOS') {
      switch (this.platform.height()) {
        case 812:
          this.phone_model = 'iPhone X';
          break;
        case 736:
          this.phone_model = 'iPhone 6/7/8 Plus';
          break;
        case 667:
          this.phone_model = 'iPhone 6/7/8';
          break;
      }

      const alert = await this.alertController.create({
        header: 'Hey there',
        subHeader: 'Information',
        message: 'We have adjusted the layout as per the phone model - ' + this.phone_model,
        buttons: ['OK']
      });

      await alert.present();
    }
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
    

  send() {
    if (this.input != '') {
      // this.webSocketService.listen(this.input).subscribe((data)=>{
      //   alert('sdf');
      //   console.log(data);
      // });
      this.webSocketService.sendMessage(this.input);
 

      // this.conversation.push({ text: this.input, sender: 1, image: 'assets/images/sg1.jpg' });
      // this.input = '';
      // setTimeout(() => {
      //   this.scrollToBottom()
      // }, 10)
    }
  }

  ngOnInit() {
    this.webSocketService
    .getMessages()
    .subscribe((message: string) => {
      this.conversation.push({ text: message, sender: 1, image: 'assets/images/sg1.jpg' });
      this.input = '';
       setTimeout(() => {
        this.scrollToBottom()
       }, 10)
    });
  }

  scrollToBottom(){
    let content = document.getElementById("chat-container");
    let parent = document.getElementById("chat-parent");
    let scrollOptions = {
      left: 0,
      top: content.offsetHeight
    }
    
    parent.scrollTo(scrollOptions)
  }


}
