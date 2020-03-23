import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChatService, Message } from '../../../services/chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
 
  constructor(public chat: ChatService, public dialog: MatDialog) { }
  
    openDialog(): void { 
      const dialogRef = this.dialog.open(ChatDialogComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
       
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  
  }
  @Component({
    selector: 'app-chat-dialog',
    templateUrl: './chat-dialog.component.html',
  })
  export class ChatDialogComponent implements OnInit {
    
    messages: Observable<Message[]>;
    formValue: string;
    
    constructor(public chat: ChatService,public dialogRef: MatDialogRef<ChatDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
    ngOnInit() {
      // appends to array after each new message is added to feedSource
      this.messages = this.chat.conversation.asObservable()
      .pipe(
      scan((acc, val) => acc.concat(val)));
    }
    sendMessage() {
      this.chat.converse(this.formValue);
      this.formValue = '';
    } 
  }
