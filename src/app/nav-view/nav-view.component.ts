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

    this.authService.userSubject.subscribe(
      (data) => {this.currentUser = data; this.getMessages();}
    );
  }

  onRemoveNotif(){
    this.notif = 0;

    let nbMessage = this.messages.length
    for(let i = 0 ; i < nbMessage; i++){
      if(this.messages[i].read == 0){
        this.messages[i].read = 0;
        this.messageService.updateMessage(this.currentUser.UserID, this.messages[i].messageID, this.messages);
      }

    }

  }


  onLogout(){
    return this.authService.logout();
  }

  getMessages(){
    if(this.currentUser !== null){
      this.messageService.getMessages(this.currentUser.UserID).subscribe(
      (data) => {this.messages = data; this.getMessageUnread();}
      );
    }

  }

  getMessageUnread(){
    let cpt = 0
    let nbMessage = this.messages.length
    for(let i = 0 ; i< nbMessage; i++){
      if(this.messages[i].read === 0){
        cpt += 1
      }
    }
    this.notif = cpt
  }

}
