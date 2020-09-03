import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {MessagerieService} from "../services/messagerie/messagerie.service";

@Component({
  selector: 'app-nav-view',
  templateUrl: './nav-view.component.html',
  styleUrls: ['./nav-view.component.scss']
})
export class NavViewComponent implements OnInit {

  notif;
  currentUser;
  messages;

  constructor(private authService: AuthService, private messageService: MessagerieService) { }

  ngOnInit(): void {
    this.getMessages();
    this.authService.userSubject.subscribe(
      (data) => {this.currentUser = data; this.getMessages();}
    );

    this.messageService.messageSubject.subscribe(
      (datae) => {this.messages = datae}
    )
  }

  onRemoveNotif(){
    this.notif = 0;
    let nbMessage = this.messages.length
    for(let i = 0 ; i < nbMessage; i++){
      if(this.messages[i].read == 0){
        this.messages[i].read = 1;
        this.messageService.updateMessage(this.messages[i]);
      }
    }
  }

  onLogout(){
    return this.authService.logout();
  }

  getMessages(){
    if(this.currentUser !== null){
      this.messages = this.messageService.messages
    }
  }

  getMessageUnread(){
    let cpt = 0
    let nbMessage = this.messages.length
    for(let i = 0; i< nbMessage; i++){
      if(this.messages[i].read === 0){
        cpt += 1
      }
    }
    this.notif = cpt
  }

}
